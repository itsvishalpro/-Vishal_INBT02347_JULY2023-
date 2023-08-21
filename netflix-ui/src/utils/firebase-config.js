import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFzPMqeAsLzc2_OV8BMTdefAxwJVOtAGQ",
  authDomain: "react-netflix-df3bb.firebaseapp.com",
  projectId: "react-netflix-df3bb",
  storageBucket: "react-netflix-df3bb.appspot.com",
  messagingSenderId: "237350001522",
  appId: "1:237350001522:web:f5f441d840c217f6661beb",
  measurementId: "G-T4YP9E6DEQ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);