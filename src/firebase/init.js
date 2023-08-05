import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlgmr0WouXxGADN1Wr_4mTqqTOHfNKlo",
  authDomain: "english-word-app-4d26f.firebaseapp.com",
  projectId: "english-word-app-4d26f",
  storageBucket: "english-word-app-4d26f.appspot.com",
  messagingSenderId: "970514851186",
  appId: "1:970514851186:web:a0940011279f1b66fe69eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();
export default db;
