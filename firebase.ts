
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSL4ZuVjhhK3hCE7HDXuwupiOGN9BarzM",
    authDomain: "clerklyapp.firebaseapp.com",
    projectId: "clerklyapp",
    storageBucket: "clerklyapp.firebasestorage.app",
    messagingSenderId: "71838448926",
    appId: "1:71838448926:web:0d0af4c3b190b722badd0f",
    measurementId: "G-T3G4M35TVB"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
