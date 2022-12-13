
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrLLK1mRic5rlLA6qxInticOcoEXH6K24",
    authDomain: "vtube-49f13.firebaseapp.com",
    projectId: "vtube-49f13",
    storageBucket: "vtube-49f13.appspot.com",
    messagingSenderId: "376861260969",
    appId: "1:376861260969:web:3f049ed225ae752098bdb8"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth();