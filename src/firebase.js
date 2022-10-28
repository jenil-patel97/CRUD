// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIqkQ_Hc3Pi6hnr4OAmsXogU964qv_Qt4",
  authDomain: "crud-4358c.firebaseapp.com",
  projectId: "crud-4358c",
  storageBucket: "crud-4358c.appspot.com",
  messagingSenderId: "433838007197",
  appId: "1:433838007197:web:9cd1113eab5d0e00d20574",
  measurementId: "G-9LVQG88SLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
