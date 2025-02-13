// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf-L5g7xsEk6KO9Vk104as35ngKWg3rs8",
  authDomain: "real-time-chat-app-58562.firebaseapp.com",
  projectId: "real-time-chat-app-58562",
  storageBucket: "real-time-chat-app-58562.firebasestorage.app",
  messagingSenderId: "251820365797",
  appId: "1:251820365797:web:b16f5b13f4210adf2f810c",
  measurementId: "G-BZT24ECYRN",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;