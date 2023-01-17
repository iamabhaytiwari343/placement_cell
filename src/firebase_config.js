import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyAehjZwBr6n7m1Yoe2WJqgLbgecyR-UyY4",
    authDomain: "bit-placement-cell.firebaseapp.com",
    databaseURL: "https://bit-placement-cell-default-rtdb.firebaseio.com",
    projectId: "bit-placement-cell",
    storageBucket: "bit-placement-cell.appspot.com",
    messagingSenderId: "228499980737",
    appId: "1:228499980737:web:49cbfe9e2aecb2e1776f40",
    measurementId: "G-5YYC4NDCVE"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};