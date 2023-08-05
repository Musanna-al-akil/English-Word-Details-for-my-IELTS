import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.APP_ID}`
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();
export default db;
