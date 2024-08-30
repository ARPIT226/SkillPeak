// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAics_V7hHFjkImtO46J-5WTYOhoxw3fXo",
  authDomain: "skillpeak-b8b0c.firebaseapp.com",
  databaseURL: "https://skillpeak-b8b0c-default-rtdb.firebaseio.com",
  projectId: "skillpeak-b8b0c",
  storageBucket: "skillpeak-b8b0c.appspot.com",
  messagingSenderId: "667678745198",
  appId: "1:667678745198:web:27d10bc29ec74f7c7fbc7f",
  measurementId: "G-P323Y8CJBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);