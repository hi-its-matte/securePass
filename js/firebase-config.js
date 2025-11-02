// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyDmSgqpG33f13HimGfrkHRrXO9VhQBcHME",
  authDomain: "matte-password-manager.firebaseapp.com",
  projectId: "matte-password-manager",
  storageBucket: "matte-password-manager.appspot.com",
  messagingSenderId: "744795492728",
  appId: "1:744795492728:web:d65696d137f009f238388d"
};

// inizializzazione
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// rende globali
window.auth = auth;
window.db = db;
