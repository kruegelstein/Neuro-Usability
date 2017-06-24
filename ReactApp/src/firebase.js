import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7Y7ceHC7TFf1Jo14Jm3oIQ2oPAddaFcM",
    authDomain: "dcaiti-1.firebaseapp.com",
    databaseURL: "https://dcaiti-1.firebaseio.com",
    projectId: "dcaiti-1",
    storageBucket: "",
    messagingSenderId: "892824990983"
};

firebase.initializeApp(config);
const database = firebase.database();
// export const carRef = firebase.database().ref('Cars');
// export const completeGoalRef = firebase.database().ref('completeGoals');

export default database;
