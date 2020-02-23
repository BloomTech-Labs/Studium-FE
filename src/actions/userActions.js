import { action } from "./action";
import firebase from '../firebase/FirebaseConfig';

export const FETCHING_USER = "FETCHING_USER";
export const FETCHED_USER = "FETCHED_USER";

export const fetchUser = ( dispatch ) => {
  
  dispatch( action( FETCHING_USER ) );
  setTimeout( () => {
    
    dispatch( action( FETCHED_USER, { name: "Jeremiah" } ) );
  }, 1000 );
  
};



//sign in and sign out action
export const SIGNED_IN = "SIGNED_IN"
export const SIGNIN_FAILED = "SIGNIN_FAILED"
export const SIGNOUT = "SIGNOUT"
export const ATTEMPT_SIGNIN = "ATTEMPT_SIGNIN"
export const EMAIL_PROVIDER = "EMAIL_PROVIDER"
export const GOOGLE_PROVIDER = "GOOGLE_PROVIDER"



export const signedIn = (user, dispatch) => {
  localStorage.setItem('loggedIn', 'true');
  dispatch(action(SIGNED_IN, user));//calls reducer
  //checkUserRegistered(user.uid, dispatch);
};

export const signout = (dispatch) => {
  
  localStorage.setItem('loggedIn', 'false');
  // GIDSignIn.sharedInstance().signOut().then(() => {
  //   dispatch(action(SIGNOUT))
  // });
  firebase.auth().signOut().then(() => {
    dispatch(action(SIGNOUT))
  });
  
}


export const signin = (authType, dispatch, email, password) => {
  
  dispatch(action(ATTEMPT_SIGNIN));

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
            signedIn(user, dispatch)
            // user.displayName = firstName + ' ' + lastName;
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
          //dispatch(action(SIGNUP_FAILED, error.message));
        }
      });
      return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();

  if(authType === GOOGLE_PROVIDER) {
    firebase 
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        
        signedIn(res.user, dispatch);
      }).catch(err => {
        dispatch(action(SIGNIN_FAILED, err.message));
        console.log(err);
      })
  }
  
}

//Check User register

export const CHECK_USER_REGISTERED = "CHECK_USER_REGISTERED"
export const USER_ATTEMPT_REGISTER = "USER_ATTEMPT_REGISTER"
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED"
export const USER_REGISTER_COMPLETE = "USER_REGISTER_COMPLETE"


//functions for registering.

export const checkUser = (dispatch) => {
  dispatch (action(CHECK_USER_REGISTERED));
  
}