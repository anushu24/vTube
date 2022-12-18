
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5Farup5-GS2mabfppJISUPs3c2XP004M",
    authDomain: "vtube-a3fa9.firebaseapp.com",
    projectId: "vtube-a3fa9",
    storageBucket: "vtube-a3fa9.appspot.com",
    messagingSenderId: "443442486399",
    appId: "1:443442486399:web:f5f318d6bb1aa4c4e0f34a",
    measurementId: "G-EZX6X28XEZ"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth();