import * as firebase from 'firebase';

const firebaseConfig = {
/*eslint no-undef:0*/
  apiKey: process.env.REACT_APP_apiKey,
/*eslint no-undef:0*/
  authDomain: process.env.REACT_APP_authDomain,
/*eslint no-undef:0*/
  databaseURL: process.env.REACT_APP_databaseURL,
/*eslint no-undef:0*/
  projectId: process.env.REACT_APP_projectId,
/*eslint no-undef:0*/
  storageBucket: process.env.REACT_APP_storageBucket,
/*eslint no-undef:0*/
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
/*eslint no-undef:0*/
  appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const store = firebase.firestore();

export default firebase;
