// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,FacebookAuthProvider,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKz8yv2J019thIsFYatnyjwsuwxFKUZ8o",
  authDomain: "aggrolabfx.firebaseapp.com",
  projectId: "aggrolabfx",
  storageBucket: "aggrolabfx.appspot.com",
  messagingSenderId: "351117267407",
  appId: "1:351117267407:web:2367d1b7342c6bbc5602ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export {auth,googleAuthProvider,facebookAuthProvider};

