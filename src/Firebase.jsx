import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDocs, getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
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

export async function addTicket(userID, timestamp, product) {
  const productCheck = await getProduct(product);
  console.log(productCheck);
  if (productCheck !== undefined) {
    await setDoc(doc(db, "tickets", v4()), {
      userID: userID,
      timestamp: timestamp,
      product: product,
    });
  } else {
    console.log("product not found");
  }
}

export async function getProduct(productName) {
  const col = doc(db, "products", productName);

  return await getDoc(col).then(async (e) => {
    const exist = e.exists();
    console.log(exist);
    if (exist) {
      return { price: e.get("price"), name: e.get("name") };
    } else {
      return undefined;
    }
  });
}

export async function getAllProducts() {
  const col = collection(db, "products");

  return await getDocs(col).then((e) => {
    console.log(e);
  });
}

export default app;
