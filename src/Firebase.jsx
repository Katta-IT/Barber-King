import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUwY7e8JVTIfVQkFh2u_-8QECzLX8-wb8",
  authDomain: "passvarsel-c6778.firebaseapp.com",
  projectId: "passvarsel-c6778",
  storageBucket: "passvarsel-c6778.appspot.com",
  messagingSenderId: "432254781651",
  appId: "1:432254781651:web:eb2f2f7f54fd6a3c536c26",
  measurementId: "G-RM9YTL65HL",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics();
export const functions = getFunctions();
export const firestore = getFirestore();
export const auth = getAuth();
export default firebase;
