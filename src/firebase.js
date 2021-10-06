// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFPfaZVWJDFEBQRDiayUr8ZyT06qAXYPo",
  authDomain: "to-do-list-claps.firebaseapp.com",
  projectId: "to-do-list-claps",
  storageBucket: "to-do-list-claps.appspot.com",
  messagingSenderId: "1029653503865",
  appId: "1:1029653503865:web:04432a0ef5f5a786b319a8",
  measurementId: "G-WNQGPYL90B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=app.firestore();
export {db} 