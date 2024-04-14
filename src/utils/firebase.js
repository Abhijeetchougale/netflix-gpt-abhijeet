// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByeyuZZdgioZZMRuH4b4omkgmVJyEZn-c",
  authDomain: "netflixgpt-bc059.firebaseapp.com",
  projectId: "netflixgpt-bc059",
  storageBucket: "netflixgpt-bc059.appspot.com",
  messagingSenderId: "508842730675",
  appId: "1:508842730675:web:391e77557fe9bb84b13cc6",
  measurementId: "G-JFCVW4ZNSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();