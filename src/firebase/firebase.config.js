// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcoNUA7bhRCV_D_hD9I8d19MaXhOPH1C4",
  authDomain: "the-dragon-news-9c53d.firebaseapp.com",
  projectId: "the-dragon-news-9c53d",
  storageBucket: "the-dragon-news-9c53d.appspot.com",
  messagingSenderId: "628180897505",
  appId: "1:628180897505:web:3f52ecc84d5bc3e0eef1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;