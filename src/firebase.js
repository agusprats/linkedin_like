import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKWP881-G8csZyyiMbXtaReoBLzmET9io",
    authDomain: "linkedin-like.firebaseapp.com",
    projectId: "linkedin-like",
    storageBucket: "linkedin-like.appspot.com",
    messagingSenderId: "941348288203",
    appId: "1:941348288203:web:e0e2eb6fdb3e666fcdcd4e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};