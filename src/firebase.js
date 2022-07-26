// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAUKcPGi-X24MLbOY-J3GYnX1gBJ4HJaSU",

  authDomain: "jinkim-io.firebaseapp.com",

  projectId: "jinkim-io",

  storageBucket: "jinkim-io.appspot.com",

  messagingSenderId: "397470265924",

  appId: "1:397470265924:web:5e753cd946814efd1d4211",

  measurementId: "G-6RV6KVVYW2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);