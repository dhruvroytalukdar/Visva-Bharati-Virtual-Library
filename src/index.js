import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA65Ianv_ph8x34NZj2l8zgn3YhbtVSqVs",
  authDomain: "vbvl-test.firebaseapp.com",
  projectId: "vbvl-test",
  storageBucket: "vbvl-test.appspot.com",
  messagingSenderId: "299935144151",
  appId: "1:299935144151:web:fd1c73741518b305db3892",
  measurementId: "G-YNCRWGPZ23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

