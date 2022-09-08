import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOZlEruW6Bw01qICQdgvtTgNcMTXNM1yI",
  authDomain: "realtime-chat-app-9eded.firebaseapp.com",
  projectId: "realtime-chat-app-9eded",
  storageBucket: "realtime-chat-app-9eded.appspot.com",
  messagingSenderId: "962042637652",
  appId: "1:962042637652:web:3fe96d11fa730c7b8e6cc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()