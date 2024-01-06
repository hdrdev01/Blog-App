// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-409417.firebaseapp.com",
  projectId: "nextjs-blog-409417",
  storageBucket: "nextjs-blog-409417.appspot.com",
  messagingSenderId: "382802103781",
  appId: "1:382802103781:web:de0325debbf2850126b30c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);