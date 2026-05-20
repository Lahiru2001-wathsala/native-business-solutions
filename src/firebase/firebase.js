import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {

 apiKey: "AIzaSyAEiOoeqQ2uHNJ6nPDvBkDDOhLHkBstYOQ",
  authDomain: "native-business-solutions.firebaseapp.com",
  projectId: "native-business-solutions",
  storageBucket: "native-business-solutions.firebasestorage.app",
  messagingSenderId: "939492566923",
  appId: "1:939492566923:web:da2c8e41d9d9cdb6e5718e",
  measurementId: "G-3WWKDDWFQT"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);