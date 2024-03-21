// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

  // apiKey: "AIzaSyBDgfGL29zdYw662yWXztBMA_4jBvC6A-g",
  // authDomain: "fir-monkey-blogging.firebaseapp.com",
  // projectId: "fir-monkey-blogging",
  // storageBucket: "fir-monkey-blogging.appspot.com",
  // messagingSenderId: "716370907066",
  // appId: "1:716370907066:web:705f0dd21c5e83da24d783",
  // measurementId: "G-4J3VXJ7C6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
