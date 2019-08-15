import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC_WXWTjsk3KRgi-qKrsrg6vo9yHgp35oU",
    authDomain: "expense-tracker-91e96.firebaseapp.com",
    databaseURL: "https://expense-tracker-91e96.firebaseio.com",
    projectId: "expense-tracker-91e96",
    storageBucket: "expense-tracker-91e96.appspot.com",
    messagingSenderId: "561514169184",
    appId: "1:561514169184:web:008b4fc24f959e2a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  db.collection('users').doc('user_details').set({
      first: "david",
      last: "ubanyi",
      phoneNumber: "08102906281",
      location: "Nigeria",
  }).then (function(docRef){
      console.log("document written with ")
  })