import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOPttAY-sSAGZMwRbXMoDEm7nxlVWbLmI",
  authDomain: "facebook-messanger-build.firebaseapp.com",
  databaseURL: "https://facebook-messanger-build.firebaseio.com",
  projectId: "facebook-messanger-build",
  storageBucket: "facebook-messanger-build.appspot.com",
  messagingSenderId: "562766422273",
  appId: "1:562766422273:web:f3bc249e98ccd0f1d47b00",
  measurementId: "G-EYSTYKJ9HQ"
});

const db = firebaseApp.firestore();

export default db;