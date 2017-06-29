import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6FCirB5lUn9IQ8ZWVd2_ted_oLIN3OW0",
    authDomain: "dcaiti-2.firebaseapp.com",
    databaseURL: "https://dcaiti-2.firebaseio.com",
    projectId: "dcaiti-2",
    storageBucket: "dcaiti-2.appspot.com",
    messagingSenderId: "208276902236"
  };

firebase.initializeApp(config);
const database = firebase.database();
// export const carRef = firebase.database().ref('Cars');
// export const completeGoalRef = firebase.database().ref('completeGoals');

export default database;
