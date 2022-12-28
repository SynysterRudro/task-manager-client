// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwFpT4onQWlHNnrIkLUQ5436SKbkYgOIc",
    authDomain: "task-manager-b88d0.firebaseapp.com",
    projectId: "task-manager-b88d0",
    storageBucket: "task-manager-b88d0.appspot.com",
    messagingSenderId: "631019116256",
    appId: "1:631019116256:web:bdfefceec9d7e532286285"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);