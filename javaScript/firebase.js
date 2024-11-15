// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvucAaXp9GE6XNN0KRaNIXQZZ26fDS_AA",
  authDomain: "intro-to-programming-d493e.firebaseapp.com",
  projectId: "intro-to-programming-d493e",
  storageBucket: "intro-to-programming-d493e.firebasestorage.app",
  messagingSenderId: "168960613090",
  appId: "1:168960613090:web:1d94844e5229d244405cbb",
  measurementId: "G-MLXBZ90GCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

