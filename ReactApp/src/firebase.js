import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBFegbs7mZfZZPaMGaR2R6K39uZwTprnAw",
    authDomain: "dcait-project.firebaseapp.com",
    databaseURL: "https://dcait-project.firebaseio.com",
    projectId: "dcait-project",
    storageBucket: "dcait-project.appspot.com",
    messagingSenderId: "748612450500"
};

firebase.initializeApp(config);
const database = firebase.database();
// export const carRef = firebase.database().ref('Cars');
// export const completeGoalRef = firebase.database().ref('completeGoals');

export default database;
