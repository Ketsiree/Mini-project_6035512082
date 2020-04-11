import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCEuHstUes2E1COX2kueelZWQ8XZwxRjVQ",
    authDomain: "mini-project-6035512082.firebaseapp.com",
    databaseURL: "https://mini-project-6035512082.firebaseio.com",
    projectId: "mini-project-6035512082",
    storageBucket: "mini-project-6035512082.appspot.com",
    messagingSenderId: "1079564372345",
    appId: "1:1079564372345:web:3bae5f48d098ce16ad47a8",
    measurementId: "G-EREX068PDC"
  };
  // Instantiate a Firebase app.
  const fire = firebase.initializeApp(firebaseConfig);
  

  export default fire;