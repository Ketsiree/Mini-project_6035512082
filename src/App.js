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

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container">
          <h1>FirebaseUI-React</h1>
          <h1> with Firebase Authentication</h1>

          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}

export default SignInScreen;