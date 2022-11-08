// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2NID0D723OxaT0iL18g8Samd5l1y1Mw",
  authDomain: "insta-reels-fjp5-857af.firebaseapp.com",
  projectId: "insta-reels-fjp5-857af",
  storageBucket: "insta-reels-fjp5-857af.appspot.com",
  messagingSenderId: "521136253864",
  appId: "1:521136253864:web:281b22c49fa3c8f14e8b9d",
  measurementId: "G-H3EW2L48FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage=getStorage(app);
const auth=getAuth();
export {auth,storage}