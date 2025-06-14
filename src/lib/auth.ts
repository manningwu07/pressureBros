// auth.ts
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, type UserCredential } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

// Function to sign in with Google
export const signInWithGoogle = async (): Promise<UserCredential | void> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

// Function to check if user is an admin
export const checkIfAdmin = async (userEmail: string) => {
  const docRef = doc(db, 'ehsSpeechAndDebate', 'authorizedUsers');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const adminEmails = docSnap.data()?.admin as string[] || [];
    const ownerEmail = docSnap.data()?.owner as string; 
    return adminEmails.includes(userEmail) || ownerEmail === userEmail; 
  }
  return false;
};