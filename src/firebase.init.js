// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-v_kz4QrA9DJNb2k7qR_dhg4gfOiAq5Q",
  authDomain: "context-api-auth-747a4.firebaseapp.com",
  projectId: "context-api-auth-747a4",
  storageBucket: "context-api-auth-747a4.firebasestorage.app",
  messagingSenderId: "207661399972",
  appId: "1:207661399972:web:c72ea12b9a73f9ac1bcb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;