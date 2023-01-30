import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3aJjEGo45pjApukBXph02Zx3CWRbrzjs",
  authDomain: "dentist-database.firebaseapp.com",
  projectId: "dentist-database",
  storageBucket: "dentist-database.appspot.com",
  messagingSenderId: "531446949876",
  appId: "1:531446949876:web:76ed711710c9b97b37fba1",
  measurementId: "G-ZC5C6VHL9D",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
