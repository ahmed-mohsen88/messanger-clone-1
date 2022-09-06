
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBy9V8YVh6nVV21W0Zo89DKxHcM8EYPqQ",
  authDomain: "facebook-messenger-clone-ce071.firebaseapp.com",
  projectId: "facebook-messenger-clone-ce071",
  storageBucket: "facebook-messenger-clone-ce071.appspot.com",
  messagingSenderId: "1095858193916",
  appId: "1:1095858193916:web:faefe270324d04d88a5e79",
  measurementId: "G-HWM3CNPFPN",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const analytics = app.analytics();
const auth = firebase.auth();

const FieldValue = db.FieldValue;

export { db, analytics, FieldValue, auth };
