import { action } from './action';
import { createAxios, createAxiosAuth } from '../utilities/createAxios.js';
import firebase from '../config/firebase/FirebaseConfig.js';

export const SIGNED_IN = 'SIGNED_IN';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNOUT = 'SIGNOUT';
export const ATTEMPT_SIGNIN = 'ATTEMPT_SIGNIN';

/**
 * @function
 * @name signedIn
 * @param {User} user
 * @param {Dispatch} dispatch
 */
export const signedIn = ( user, dispatch ) => {
  localStorage.setItem( 'loggedIn', 'true' );
  dispatch( action( SIGNED_IN, user ) ); //calls reducer
  //checkUserRegistered(user.uid, dispatch);
};

/**
 * @function
 * @name signout
 * @param {Dispatch} dispatch
 */
export const signout = dispatch => {
  localStorage.setItem( 'loggedIn', 'false' );
  firebase
    .auth()
    .signOut()
    .then( () => {
      dispatch( action( SIGNOUT ) );
    } );
};

export const EMAIL_PROVIDER = 'EMAIL_PROVIDER';
export const GOOGLE_PROVIDER = 'GOOGLE_PROVIDER';

/**
 * @typedef {("GOOGLE_PROVIDER" | "EMAIL_PROVIDER")} AuthType
 */

/**
 *
 * @param {AuthType} authType
 * @param {Dispatch} dispatch
 * @param {string} [email]
 * @param {string} [password]
 */
export const signin = ( authType, dispatch, email, password ) => {
  
  dispatch( action( ATTEMPT_SIGNIN ) );
  
  if( authType === EMAIL_PROVIDER ){
    signInEmailProvider( dispatch, email, password );
  }else if( authType === GOOGLE_PROVIDER ){
    signInWithGoogleAuthProvider( dispatch );
  }
  
};

/**
 * @function
 * @name signInEmailProvider
 * @param {Dispatch} dispatch
 */
const signInWithGoogleAuthProvider = ( dispatch ) => {
  
  firebase
    .auth()
    .signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    .then( res => {
      signedIn( res.user, dispatch );
      checkUser( res.user, dispatch );
    } )
    .catch( err => {
      dispatch( action( SIGNIN_FAILED, err.message ) );
      console.log( err );
    } );
  
};

/**
 * @function
 * @name signInEmailProvider
 * @property {Dispatch} dispatch
 * @property {string} email
 * @property {string} password
 */
const signInEmailProvider = ( dispatch, email, password ) => {
  
  firebase
    .auth()
    .createUserWithEmailAndPassword( email, password )
    .then( () => {
      firebase
        .auth()
        .signInWithEmailAndPassword( email, password )
        .then( res => {
          const user = { ...res.user };
          signedIn( user, dispatch );
          // user.displayName = firstName + ' ' + lastName;
        } );
    } )
    .catch( error => {
      if( error.code.includes( 'email-already-in-use' ) ){
        firebase
          .auth()
          .signInWithEmailAndPassword( email, password )
          .then( res => {
            signedIn( res.user, dispatch );
          } )
          .catch( err => {
            dispatch( action( SIGNIN_FAILED, err.message ) );
          } );
      }else{
        //dispatch(action(SIGNUP_FAILED, error.message));
      }
    } );
};

export const CHECK_USER_REGISTERED = 'CHECK_USER_REGISTERED';
export const USER_ATTEMPT_REGISTER = 'USER_ATTEMPT_REGISTER';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const USER_REGISTER_COMPLETE = 'USER_REGISTER_COMPLETE';

//functions for registering. Need to use .then to check database.

//registers user
export const register = ( user, dispatch ) => {
  dispatch( action( USER_ATTEMPT_REGISTER ) );
  
  const userR = { uid: user.uid, username: user.email };
  createAxios( user.uid )
    .post( '/api/register', userR )
    .then( res => {
      if( res.status === 201 ){
        dispatch( action( USER_REGISTER_COMPLETE ) );
      }else{
        dispatch( action( USER_REGISTER_FAILED ) );
      }
    } )
    .catch( err => {
      console.log( err );
      dispatch( action( USER_REGISTER_FAILED, err.message ) );
      signout( dispatch );
    } );
};

export const checkUser = ( user, dispatch ) => {
  dispatch( action( CHECK_USER_REGISTERED ) );
  createAxiosAuth( user.uid )
    .get( '/api/users/me' )
    .then( res => {
      if( res.status === 200 ){
      }else{
        register( user, dispatch );
      }
    } )
    .catch( err => {
      console.log( err );
      register( user, dispatch );
    } );
};

