// Initialize Firebase
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD8_Hb1ExYqcAbyxxCUQySBqbQhXhXczoY",
  authDomain: "neuro-prod.firebaseapp.com",
  databaseURL: "https://neuro-prod.firebaseio.com",
  projectId: "neuro-prod",
  storageBucket: "neuro-prod.appspot.com",
  messagingSenderId: "908300964576"
};

export const firebaseApp = firebase.initializeApp(config)
