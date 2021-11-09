import firebase from "firebase/compat/app"
import "firebase/auth"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnY8jH11VhyPMIafX8AzcBIrCwXCgHb6s",
  authDomain: "gs-firebase-614d7.firebaseapp.com",
  projectId: "gs-firebase-614d7",
  storageBucket: "gs-firebase-614d7.appspot.com",
  messagingSenderId: "684908898890",
  appId: "1:684908898890:web:1c0b842adf5a26a65cd4b3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export { db }
