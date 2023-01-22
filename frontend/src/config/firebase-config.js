// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17XwmVgWr9YQieBgiQAI3nMSP7c6gUI0",
  authDomain: "nwhacks-2023-fb864.firebaseapp.com",
  projectId: "nwhacks-2023-fb864",
  storageBucket: "nwhacks-2023-fb864.appspot.com",
  messagingSenderId: "235446891638",
  appId: "1:235446891638:web:dc33f95126302e6e2e9b57",
  measurementId: "G-N757L2FLXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
