// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEfmCfyQJV4JGubDh64o_7rGaEY_99VdU",
//   authDomain: "quiz-qame.firebaseapp.com",
//   projectId: "quiz-qame",
//   storageBucket: "quiz-qame.firebasestorage.app",
//   messagingSenderId: "161463232557",
//   appId: "1:161463232557:web:0001a39965f0d6a726b0a4",
//   measurementId: "G-X1SVEWY7ZD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ ADD THIS LINE
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEfmCfyQJV4JGubDh64o_7rGaEY_99VdU",
  authDomain: "quiz-qame.firebaseapp.com",
  projectId: "quiz-qame",
  storageBucket: "quiz-qame.firebasestorage.app",
  messagingSenderId: "161463232557",
  appId: "1:161463232557:web:0001a39965f0d6a726b0a4",
  measurementId: "G-X1SVEWY7ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // ✅ ADD THIS LINE (for Authentication)
const analytics = getAnalytics(app);

export default app;  // ✅ optional but useful
