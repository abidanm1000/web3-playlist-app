// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6N5LJ4r8HD77bE3XOiNQ1S438Jj8SoL8",
  authDomain: "music-marketplace-a0438.firebaseapp.com",
  projectId: "music-marketplace-a0438",
  storageBucket: "music-marketplace-a0438.appspot.com",
  messagingSenderId: "559130768941",
  appId: "1:559130768941:web:a5e13dcb9286f384c12aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const auth = getAuth(app)

export default db