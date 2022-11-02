//Unsure about this file atm so please ignore

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-5UY81CFD6qvKMlZGO02sIVpvfvXOv-c",
  authDomain: "cdumap.firebaseapp.com",
  projectId: "cdumap",
  storageBucket: "cdumap.appspot.com",
  messagingSenderId: "174709894113",
  appId: "1:174709894113:web:e31896f80f0a6e3c7180a0",
  measurementId: "G-F4G0HG9H7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
const firestore = getFirestore(app)