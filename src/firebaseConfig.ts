import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAEfmCfyQJV4JGubDh64o_7rGaEY_99VdU",
  authDomain: "quiz-qame.firebaseapp.com",
  projectId: "quiz-qame",
  storageBucket: "quiz-qame.firebasestorage.app",
  messagingSenderId: "161463232557",
  appId: "1:161463232557:web:0001a39965f0d6a726b0a4",
  measurementId: "G-X1SVEWY7ZD"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
const analytics = getAnalytics(app);
export default app;
