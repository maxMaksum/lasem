// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_U5NgO0Y6O3BsOcTHtkZeGFuhWnrYF98",
  authDomain: "puskesmas-lasem.firebaseapp.com",
  projectId: "puskesmas-lasem",
  storageBucket: "puskesmas-lasem.appspot.com",
  messagingSenderId: "43053930518",
  appId: "1:43053930518:web:25b934c60f69ab4f4a7d37",
  measurementId: "G-EZ8RV8PB33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
