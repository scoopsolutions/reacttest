import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCPh41NgG3mzGDlddYkBj4T8ppZIjC1CTs",
    authDomain: "test-react-33d63.firebaseapp.com",
    projectId: "test-react-33d63",
    storageBucket: "test-react-33d63.appspot.com",
    messagingSenderId: "715985539998",
    appId: "1:715985539998:web:68218aa3d05ba0e7b03c8f",
    measurementId: "G-C4HQ0NT5TP"
  };
  
  // Initialize Firebase
const app=initializeApp(firebaseConfig);
export const authantication=getAuth(app)