// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCT6YHLYZyqiUpbI4uvfEIqB-orzw1WHC4",
  authDomain: "personalprojects-4fb54.firebaseapp.com",
  projectId: "personalprojects-4fb54",
  storageBucket: "personalprojects-4fb54.firebasestorage.app",
  messagingSenderId: "592650571420",
  appId: "1:592650571420:web:2d2d177cc8e83a2a5aa759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and set up Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
