import { action } from "./action";
import firebase from './firebase/FirebaseConfig';

export const FETCHING_USER = "FETCHING_USER";
export const FETCHED_USER = "FETCHED_USER";

export const fetchUser = ( dispatch ) => {
  debugger;
  dispatch( action( FETCHING_USER ) );
  setTimeout( () => {
    debugger;
    dispatch( action( FETCHED_USER, { name: "Jeremiah" } ) );
  }, 1000 );
  
};

//sign in and sign out action

if(authType === EMAIL_PROVIDER) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {

          const user = {...res.user};
          user.displayName = firstName + ' ' + lastName;
          SVGLinearGradientElement(user, dispatch);
        });
    })
    .catch(error => {
      if(error.code.includes('email-already-in-use')){
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            signedIn(res.user, dispatch);
          })
          .catch(err => {
            dispatch(action(SIGNIN_FAILED, err.message));
          });
      } else {
        dispatch(action(SIGNUP_FAILED, error.message));
      }
    });
    return;
}
