import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEs9GFOUeb-j98BKwveeogdVPMGZf3grU",
  authDomain: "linktreereact.firebaseapp.com",
  projectId: "linktreereact",
  storageBucket: "linktreereact.appspot.com",
  messagingSenderId: "985018488335",
  appId: "1:985018488335:web:07cd18261a953f40f3357a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
