// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
  
const firebaseConfig = {
  apiKey: "AIzaSyAocSoLCO5QY0NVgvthz69Voa3DK39pSl0",
  authDomain: "vuetifychat-62acc.firebaseapp.com",
  projectId: "vuetifychat-62acc",
  storageBucket: "vuetifychat-62acc.appspot.com",
  messagingSenderId: "798315029213",
  appId: "1:798315029213:web:1c7daa91a8f0dc14f6b134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }