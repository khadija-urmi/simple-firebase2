// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAENGa_ZWNaL4VD3rMXWd4cRdptV5zfMlE",
    authDomain: "e-firebase2.firebaseapp.com",
    projectId: "e-firebase2",
    storageBucket: "e-firebase2.firebasestorage.app",
    messagingSenderId: "608892935037",
    appId: "1:608892935037:web:b95012b0587d39da1d0a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);