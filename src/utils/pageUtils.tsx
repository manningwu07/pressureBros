/* eslint-disable @typescript-eslint/no-unsafe-call */

import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "~/lib/firebase";
import { openDB } from "idb";
import type { PressureBrosData } from "~/types/types";
import initalContent from "~/content.json"

export interface PageProps {
  adminContent?: PressureBrosData
  adminError?: boolean;
}

// Helper function to initialize IndexedDB
async function getDatabase() {
  return openDB("PressureBrosContentCache", 1, {
    upgrade(db) {
      db.createObjectStore("pages", { keyPath: "key" });
    },
  });
}

// Function to get data from IndexedDB
async function getCachedData(field: string) {
  const db = await getDatabase();
  const entry = await db.get("pages", field);
  if (entry) {
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    if (now - entry.timestamp < oneWeek) {
      return entry.data;
    }
  }
  return null;
}

// Function to cache data in IndexedDB
async function cacheData(field: string, data: any) {
  const db = await getDatabase();
  await db.put("pages", { key: field, data, timestamp: Date.now() });
}

// Function to check for circular references
function hasCircularReference(obj: any, seen = new Set()) {
  if (obj && typeof obj === "object") {
    if (seen.has(obj)) return true;
    seen.add(obj);
    for (const key in obj) {
      if (hasCircularReference(obj[key], seen)) return true;
    }
    seen.delete(obj);
  }
  return false;
}

// Function to fetch the entire content document from Firestore and cache it
export async function fetchFullContent(): Promise<PressureBrosData | null> {
  try {
    const docRef = doc(db, "PressureBros", "content"); 
    // Resets the document
    // await setDoc(docRef, initalContent); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as PressureBrosData;

      // Cache the entire document in IndexedDB
      await cacheData("fullContent", data);
      return data;
    } else {
      console.warn("Document 'PressureBros/content' does not exist. Creating it with initial content.");
      return null
    }
  } catch {
    console.error("Error fetching data");
    return initalContent as PressureBrosData;
  }
}

// Custom hook to manage content state
export function usePullContent() { 
  const [content, setContent] = useState<PressureBrosData | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchContent()
      .then((content) => {
        if (content) {
          setContent(content);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true)); // Handle unexpected errors
  }, []);
  
  const fetchContent = async (): Promise<PressureBrosData | null> => {
    // Try to load cached data first
    const cachedData = await getCachedData("fullContent");
    if (cachedData) {
      if (hasCircularReference(cachedData)) {
        console.error("Circular reference detected in cached data:", cachedData);
        return null;
      }
      return cachedData;
    }
  
    // Fetch from Firestore if no cached data
    const data = await fetchFullContent();
    if (data) {
      if (hasCircularReference(data)) {
        console.error("Circular reference detected in fetched data:", data);
        return null;
      }
  
      // Cache the data to IndexedDB
      await cacheData("fullContent", JSON.parse(JSON.stringify(data)));
      return data;
    }
  
    return initalContent as PressureBrosData; // Return null if no data could be fetched
  };
  


  return { content, error };
}
