
import firebase from "firebase/compat/app"
import { getAuth,GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBwP4UtmrBRXGUie4-xPK3vfR3mB4Yl6k8",
  authDomain: "online-bookstore-e7c20.firebaseapp.com",
  projectId: "online-bookstore-e7c20",
  storageBucket: "online-bookstore-e7c20.appspot.com",
  messagingSenderId: "208776154052",
  appId: "1:208776154052:web:00218a228fe5d535453291"
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth (app)
export const provider = new GoogleAuthProvider()