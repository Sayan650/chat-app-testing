import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBmupVJh9AoIiRU-dAAMCmjZe9UwHbcJeQ",
    authDomain: "chat-app-demo-887c6.firebaseapp.com",
    projectId: "chat-app-demo-887c6",
    storageBucket: "chat-app-demo-887c6.appspot.com",
    messagingSenderId: "589050375858",
    appId: "1:589050375858:web:4fd20f317b969e0d8e23ab",
    measurementId: "G-XSLFJ0EE9R"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
