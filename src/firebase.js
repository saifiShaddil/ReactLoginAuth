import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-bzETqAmPyrBsPHjS0v2Iy4ENFoZzPuY",
    authDomain: "reacttask-1cd85.firebaseapp.com",
    databaseURL: "https://reacttask-1cd85.firebaseio.com",
    projectId: "reacttask-1cd85",
    storageBucket: "reacttask-1cd85.appspot.com",
    messagingSenderId: "817784486955",
    appId: "1:817784486955:web:e11f668b6349821071fe6e"
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
