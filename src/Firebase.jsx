import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCMLEWxHRk8xpD5buJ7bXsoeG-j7yMfuO8",
  authDomain: "barberking-24696.firebaseapp.com",
  projectId: "barberking-24696",
  storageBucket: "barberking-24696.appspot.com",
  messagingSenderId: "621145805230",
  appId: "1:621145805230:web:58dbc6e0f31e09d7adf83f",
  measurementId: "G-MCNK46JZ6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function addTicket(userID, timestamp, price) {
  // Add a new document in collection "cities"
  console.log(v4());
  await setDoc(doc(db, "tickets", v4()), {
    userID: userID,
    timestamp: timestamp,
    price: price,
  });
}

export default app;
