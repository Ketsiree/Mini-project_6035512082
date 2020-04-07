import React, { Component } from 'react';

// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import './App.css'; // This uses CSS modules.

// Initialize Firebase

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
firebase.initializeApp(firebaseConfig);

class SignInScreen extends Component {


  render() {
    return (
      <div className="container">
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
      </div>
    );
  }
}

export default SignInScreen;


