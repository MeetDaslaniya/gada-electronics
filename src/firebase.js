// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKOWz60R1s9y5-Zz9gY5Gqalg6UxdtYq4",
  authDomain: "gada-electronics-a71de.firebaseapp.com",
  projectId: "gada-electronics-a71de",
  storageBucket: "gada-electronics-a71de.appspot.com",
  messagingSenderId: "1034340052007",
  appId: "1:1034340052007:web:362b32cb8bf39c14aef202",
  databaseURL:"https://gada-electronics-a71de-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);