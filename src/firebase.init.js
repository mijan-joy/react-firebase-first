// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBthngmmyGFsdHl4u4nFcasiobwsoJiqA",
  authDomain: "email-password-auth-3bddb.firebaseapp.com",
  projectId: "email-password-auth-3bddb",
  storageBucket: "email-password-auth-3bddb.appspot.com",
  messagingSenderId: "501124000621",
  appId: "1:501124000621:web:92e6d995cefd268479c864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;