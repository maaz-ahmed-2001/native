import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC4cTrGWAhhcbsgJlv6HHBeiltmzxrOgfs",
  authDomain: "ez-shopping-web.firebaseapp.com",
  projectId: "ez-shopping-web",
  storageBucket: "ez-shopping-web.appspot.com",
  messagingSenderId: "814680021867",
  appId: "1:814680021867:web:56853a2f43ce7d5a3c8a2e",
  measurementId: "G-M5C6TS50NJ"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    storage,
    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    ref,
    uploadBytes,
     getDownloadURL,
     signOut
};