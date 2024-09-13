// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9gFCP8GwR4vj1TdhNN-F0gwx-CP5tJKg",
  authDomain: "aconews3012.firebaseapp.com",
  projectId: "aconews3012",
  storageBucket: "aconews3012.appspot.com",
  messagingSenderId: "990632945537",
  appId: "1:990632945537:web:83c4f559af84d20189aa80",
  measurementId: "G-G1RWFETSZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);