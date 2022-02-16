import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBE8LnzNeK-o8um10L34uq29d93xCGDZhQ",
  authDomain: "block-master-b052d.firebaseapp.com",
  projectId: "block-master-b052d",
  storageBucket: "block-master-b052d.appspot.com",
  messagingSenderId: "149292496007",
  appId: "1:149292496007:web:a5966418f2af5b94a07422"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()

export {
  app,
  google,
  facebook
}