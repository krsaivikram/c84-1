import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBmjS79UZcya69uRF6auhglZUGv661KyCk",
    authDomain: "booksanta-c674b.firebaseapp.com",
    databaseURL: "https://booksanta-c674b.firebaseio.com",
    projectId: "booksanta-c674b",
    storageBucket: "booksanta-c674b.appspot.com",
    messagingSenderId: "1062790561892",
    appId: "1:1062790561892:web:44fcfc10e837a1a9af9f71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();