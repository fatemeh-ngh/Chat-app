import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB_VbHPyPYwbwhpHam-sFKgxQjAoHuKexM",
    authDomain: "botogram-8a2bf.firebaseapp.com",
    projectId: "botogram-8a2bf",
    storageBucket: "botogram-8a2bf.appspot.com",
    messagingSenderId: "985227673804",
    appId: "1:985227673804:web:03b1d9d1256d297f264269"
  }).auth();