import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import firebaseConfig from './config/fire';
import '@firebase/firestore'


if (firebase.apps.length === 0)
  firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);

serviceWorker.unregister();
