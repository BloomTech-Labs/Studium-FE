import { action } from './action';
import { createAxios, createAxiosAuth } from '../utilities/createAxios.js';
import firebase from '../config/firebase/FirebaseConfig.js';

export const SIGNED_IN = 'SIGNED_IN';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNOUT = 'SIGNOUT';
export const ATTEMPT_SIGNIN = 'ATTEMPT_SIGNIN';

/**
 * Signed In
 *
 * @description Call this function when the user is already signed in but the
 *   app just loads or when the user first signs in.
 *
 * @category Actions
 * @function
 * @name signedIn
 * @param {User} user
 * @returns {function}
 */
export const signedIn = ( user ) => dispatch => {
  localStorage.setItem( 'loggedIn', 'true' );
  dispatch( action( SIGNED_IN, user ) ); //calls reducer
  //checkUserRegistered(user.uid, dispatch);
};

/**
 * Sign out
 *
 * @category Actions
 * @function
 * @name signOut
 * returns {function}
 */
export const signOut = () => dispatch => {
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
 * Sign In
 *
 * @category Actions
 * @function
 * @name signIn
 * @param {AuthType} authType
 * @param {string} [email]
 * @param {string} [password]
 * @returns {function}
 */
export const signIn = ( authType, email, password ) => dispatch => {
  debugger;
  dispatch( action( ATTEMPT_SIGNIN ) );
  
  if( authType === EMAIL_PROVIDER ){
    dispatch( signInEmailProvider( email, password ) );
  }else if( authType === GOOGLE_PROVIDER ){
    dispatch( signInWithGoogleAuthProvider() );
  }
};

/**
 * Sign In With Google Auth
 * @category Actions
 * @function
 * @name signInEmailProvider
 * @returns {function}
 */
const signInWithGoogleAuthProvider = () => dispatch => {
  
  firebase
    .auth()
    .signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    .then( res => {
      dispatch( signedIn( res.user ) );
      dispatch( checkUser( res.user ) );
    } )
    .catch( err => {
      dispatch( action( SIGNIN_FAILED, err.message ) );
      console.log( err );
    } );
  
};

/**
 * Sign In With Email Provider
 *
 * @category Actions
 * @function
 * @name signInEmailProvider
 * @property {string} email
 * @property {string} password
 * @returns {function}
 */
const signInEmailProvider = ( email, password ) => dispatch => {
  
  firebase
    .auth()
    .createUserWithEmailAndPassword( email, password )
    .then( () => {
      firebase
        .auth()
        .signInWithEmailAndPassword( email, password )
        .then( res => {
          const user = { ...res.user };
          dispatch( signedIn( user ) );
          // user.displayName = firstName + ' ' + lastName;
        } );
    } )
    .catch( error => {
      if( error.code.includes( 'email-already-in-use' ) ){
        firebase
          .auth()
          .signInWithEmailAndPassword( email, password )
          .then( res => {
            dispatch( signedIn( res.user ) );
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
export const register = ( user ) => dispatch => {
  dispatch( action( USER_ATTEMPT_REGISTER ) );
  
  const userR = { uid: user.uid, username: user.email };
  createAxios()
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
      dispatch( signOut( dispatch ) );
    } );
};

export const checkUser = ( user ) => dispatch => {
  dispatch( action( CHECK_USER_REGISTERED ) );
  createAxiosAuth( user.uid )
    .get( '/api/users/me' )
    .then( res => {
      if( res.status === 200 ){
      }else{
        dispatch( register( user ) );
      }
    } )
    .catch( err => {
      console.log( err );
      dispatch( register( user, dispatch ) );
    } );
};

