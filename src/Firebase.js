import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC9fPyCRXBOLIhHg_93Cd4gGG_c_DtMKUE",
    authDomain: "botogram-1b96e.firebaseapp.com",
    projectId: "botogram-1b96e",
    storageBucket: "botogram-1b96e.appspot.com",
    messagingSenderId: "871234553740",
    appId: "1:871234553740:web:d6aef0b8a08558d50738a9",
  })
  .auth();
