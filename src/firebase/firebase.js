// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "share-blog-b649d.firebaseapp.com",
  projectId: "share-blog-b649d",
  storageBucket: "share-blog-b649d.appspot.com",
  messagingSenderId: "278765979179",
  appId: "1:278765979179:web:d668aecb6da498a389cc6e",
  measurementId: "G-PYSPGCX07Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
