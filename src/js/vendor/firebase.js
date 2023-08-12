// Firebase and Analytics
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOaN5DdQkKAd4Bd9cSeeAxkyHdB6UivrY",
  authDomain: "link-cervonwong.firebaseapp.com",
  projectId: "link-cervonwong",
  storageBucket: "link-cervonwong.appspot.com",
  messagingSenderId: "260057847199",
  appId: "1:260057847199:web:2948b14b9528a17b5599aa",
  measurementId: "G-MT9JG29P26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
