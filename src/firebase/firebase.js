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

  export {firebase, db as default}