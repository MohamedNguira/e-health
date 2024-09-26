// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKB_Mv9ut35Pkm3cAYUJMOES6fAt5d2ck",
    authDomain: "e-valley-694d5.firebaseapp.com",
    projectId: "e-valley-694d5",
    storageBucket: "e-valley-694d5.appspot.com",
    messagingSenderId: "649240075542",
    appId: "1:649240075542:web:e65811f3a93b0379518437",
    measurementId: "G-0MPSGDW7T9"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
