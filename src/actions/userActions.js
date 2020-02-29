import { action } from './action';
import { createAxios } from '../utilities/createAxios.js';
import firebase from '../config/firebase/FirebaseConfig.js';

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER = 'FETCHED_USER';

/**
 *
 * @param dispatch
 */
export const fetchUser = dispatch => {
  dispatch(action(FETCHING_USER));
  setTimeout(() => {
    dispatch(action(FETCHED_USER, { name: 'Jeremiah' }));
  }, 1000);
};

//sign in and sign out action
export const SIGNED_IN = 'SIGNED_IN';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNOUT = 'SIGNOUT';
export const ATTEMPT_SIGNIN = 'ATTEMPT_SIGNIN';
export const EMAIL_PROVIDER = 'EMAIL_PROVIDER';
export const GOOGLE_PROVIDER = 'GOOGLE_PROVIDER';

/**
 *
 * @param user
 * @param dispatch
 */
export const signedIn = (user, dispatch) => {
  localStorage.setItem('loggedIn', 'true');
  dispatch(action(SIGNED_IN, user)); //calls reducer
  //checkUserRegistered(user.uid, dispatch);
};

/**
 *
 * @param dispatch
 */
export const signout = dispatch => {
  localStorage.setItem('loggedIn', 'false');
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(action(SIGNOUT));
    });
};

/**
 *
 * @param authType
 * @param dispatch
 * @param email
 * @param password
 */
export const signin = (authType, dispatch, email, password) => {
  console.log('inside signin');
  dispatch(action(ATTEMPT_SIGNIN));

  if (authType === EMAIL_PROVIDER) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            const user = { ...res.user };
            signedIn(user, dispatch);
            // user.displayName = firstName + ' ' + lastName;
          });
      })
      .catch(error => {
        if (error.code.includes('email-already-in-use')) {
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
  if (authType === GOOGLE_PROVIDER) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        signedIn(res.user, dispatch);
        checkUser(res.user, dispatch);
      })
      .catch(err => {
        dispatch(action(SIGNIN_FAILED, err.message));
        console.log(err);
      });
  }
};

//Check User register

export const CHECK_USER_REGISTERED = 'CHECK_USER_REGISTERED';
export const USER_ATTEMPT_REGISTER = 'USER_ATTEMPT_REGISTER';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const USER_REGISTER_COMPLETE = 'USER_REGISTER_COMPLETE';

//functions for registering. Need to use .then to check database.

//registers user
export const register = (user, dispatch) => {
  dispatch(action(USER_ATTEMPT_REGISTER));

  const userR = { uid: user.uid, username: user.email };

  createAxios(user.uid)
    .post('/api/register', userR)
    .then(res => {
      if (res.status === 201) {
        dispatch(action(USER_REGISTER_COMPLETE));
      } else {
        dispatch(action(signout));
      }
    })
    .catch(err => {
      console.log(err);
      signout(dispatch);
    });
};

export const checkUser = (user, dispatch) => {
  dispatch(action(CHECK_USER_REGISTERED));
  createAxios(user.uid)
    .get('/api/users/me')
    .then(res => {
      if (res.status === 200) {
      } else {
        register(user, dispatch);
      }
    })
    .catch(err => {
      console.log(err);
      register(user, dispatch);
    });
};

// export const registeredUser = () => {
//   const request = createAxios();

//   let info = new FormData();
//   info.append{}
// }
// };
