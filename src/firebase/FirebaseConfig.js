import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDSkG8RXbv5BMD3_oEK3SBB8hxdICiUVLY",
  authDomain: "synaps-5ce5c.firebaseapp.com",
  databaseURL: "https://synaps-5ce5c.firebaseio.com",
  projectId: "synaps-5ce5c",
  storageBucket: "synaps-5ce5c.appspot.com",
  messagingSenderId: "484285835517",
  appId: "1:484285835517:web:424a873200421e100c7694",
  measurementId: "G-4WR8S8F7FH"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );
export const store = firebase.firestore();

export default firebase;