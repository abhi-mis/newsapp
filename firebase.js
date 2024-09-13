// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKIuBFyzklrekVDFQxd3mrE0UpIr0ZZro",
  authDomain: "aconews-d5c98.firebaseapp.com",
  projectId: "aconews-d5c98",
  storageBucket: "aconews-d5c98.appspot.com",
  messagingSenderId: "132026827466",
  appId: "1:132026827466:web:9d0707ad6009f890adea33",
  measurementId: "G-523J0VDJPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);