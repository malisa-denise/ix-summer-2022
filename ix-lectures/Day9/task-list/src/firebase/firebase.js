// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwl2QmdMUuHQ-MISkQYX3BY8-ubeAoI9o",
  authDomain: "task-list-pink-session-2.firebaseapp.com",
  projectId: "task-list-pink-session-2",
  storageBucket: "task-list-pink-session-2.appspot.com",
  messagingSenderId: "1015078003389",
  appId: "1:1015078003389:web:7cbd3b382eb1b8d60b4dd4",
  measurementId: "G-JX47371MPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {
  firestore
}
