import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPf2ovzNJEAAM-kkhv9LM9DaKj8eHYWLw",
  authDomain: "voiceme-b98de.firebaseapp.com",
  databaseURL:
    "https://voiceme-b98de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "voiceme-b98de",
  storageBucket: "voiceme-b98de.appspot.com",
  messagingSenderId: "773697591486",
  appId: "1:773697591486:web:49e16a52bb334a6880a6ef",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

auth.languageCode = "ru";
