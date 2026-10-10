// Firebase Core Configuration and Exports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getFirestore, collection, doc, getDoc, setDoc, addDoc, updateDoc, 
    deleteDoc, onSnapshot, query, where, runTransaction, increment 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { 
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmnL92Tlf0-omdZEUXFg1xb5W_c_0NQYE",
    authDomain: "awang-promax.firebaseapp.com",
    databaseURL: "https://awang-promax-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "awang-promax",
    storageBucket: "awang-promax.firebasestorage.app",
    messagingSenderId: "938318378311",
    appId: "1:938318378311:web:1cf64e8521a22631844862",
    measurementId: "G-SBZG2HR1MQ"
};

export const FAKE_DOMAIN = "@awang.game";
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
    collection, doc, getDoc, setDoc, addDoc, updateDoc, 
    deleteDoc, onSnapshot, query, where, runTransaction, increment,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut
};
