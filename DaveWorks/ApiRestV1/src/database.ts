// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBNz1I_FML8ucl5j95A3Y8-Q-4nqC3CZRk",
    authDomain: "stormyv1-925c1.firebaseapp.com",
    projectId: "stormyv1-925c1",
    storageBucket: "stormyv1-925c1.appspot.com",
    messagingSenderId: "239856818328",
    appId: "1:239856818328:web:eb138748e939e4fffa98ed",
    measurementId: "G-MM7W4FHF5X"
  }

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);



import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
const serviceAccount = require('./config/stormyv1-925c1-a28ee560843d.json');


  // initializeApp(firebaseConfig)
  initializeApp({
    credential: cert(serviceAccount)
  });

  const db= getFirestore();
  
  // const User = db.collection("User")

export default db;