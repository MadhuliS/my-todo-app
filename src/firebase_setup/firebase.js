import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVD4jzlX7lWHP9AJw-FhqZ3ZV48rBvgQ",
  authDomain: "my-task-tracker-af284.firebaseapp.com",
  projectId: "my-task-tracker-af284",
  storageBucket: "my-task-tracker-af284.appspot.com",
  messagingSenderId: "180429496870",
  appId: "1:180429496870:web:fb217aadde735960d83ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
