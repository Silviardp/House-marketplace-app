import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKntJ4xhaZtEOWXyUQV0eyxFMBhkcjirw",
  authDomain: "house-marketplace-app-a7f8a.firebaseapp.com",
  projectId: "house-marketplace-app-a7f8a",
  storageBucket: "house-marketplace-app-a7f8a.appspot.com",
  messagingSenderId: "135953281685",
  appId: "1:135953281685:web:a3e27a90ea57a92d00a19c"
};

export const db = getFirestore()