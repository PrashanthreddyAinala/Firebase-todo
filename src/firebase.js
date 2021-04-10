import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC-II4D7WGzusqSBQpkRz4e4lWgD-OxRgA",
    authDomain: "todo-app-c4873.firebaseapp.com",
    projectId: "todo-app-c4873",
    storageBucket: "todo-app-c4873.appspot.com",
    messagingSenderId: "521719114941",
    appId: "1:521719114941:web:f03d8fcdad637a1d529bd4"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db} ;