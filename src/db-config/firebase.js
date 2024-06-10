// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAnkyjrf9uxR1GQfAPSyEyTD03JFuuTi58",
    authDomain: "mind-a.firebaseapp.com",
    projectId: "mind-a",
    storageBucket: "mind-a.appspot.com",
    messagingSenderId: "689844838225",
    appId: "1:689844838225:web:ddd1f4f1178291b0c0bd70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const provider = new GoogleAuthProvider()


export {
    auth,
    provider,
    db
}