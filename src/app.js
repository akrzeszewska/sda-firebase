import './../styles/styles.css';

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAt5YcXUs3rl4TzKrVlWZuyiFLPJLXDyC4",
  authDomain: "sda-firebase-95a6a.firebaseapp.com",
  projectId: "sda-firebase-95a6a",
  storageBucket: "sda-firebase-95a6a.appspot.com",
  messagingSenderId: "955449085205",
  appId: "1:955449085205:web:e97852bbf3174177356d1c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const url = "https://firebasestorage.googleapis.com/v0/b/sda-firebase-95a6a.appspot.com/o/test%2F327996063_3088573658107991_6014656780590708194_n.jpg?alt=media&token=e873115c-7b11-4a1d-8f4c-91dfa23cea49";

const createImg = document.createElement("img");
document.body.appendChild(createImg);
createImg.setAttribute("src", url);
