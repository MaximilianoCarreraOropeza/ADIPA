import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMjGjpOhksxMC-qtFnf-gXr4Tfea59Or4",
  authDomain: "estacionamiento-7f6b8.firebaseapp.com",
  databaseURL: "https://estacionamiento-7f6b8-default-rtdb.firebaseio.com",
  projectId: "estacionamiento-7f6b8",
  storageBucket: "estacionamiento-7f6b8.appspot.com",
  messagingSenderId: "135954222143",
  appId: "1:135954222143:web:8d953dcea8950a0999fc8a"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp)