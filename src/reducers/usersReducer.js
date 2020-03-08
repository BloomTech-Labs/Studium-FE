import {
  SIGNED_IN,
  SIGNIN_FAILED,
  SIGNOUT,
  ATTEMPT_SIGNIN,
  USER_REGISTER_FAILED,
  USER_ATTEMPT_REGISTER,
  USER_REGISTER_COMPLETE,
  CHECK_USER_REGISTERED,
} from '../actions';

/**
 * @typedef {object} UsersReducerState
 * @property {boolean} fetching - Fetching the user from the database.
 * @property {Error | null} error - Fetching the user from the database.
 * @property {User | {}} user - Fetching the user from the database.
 * @property {boolean} checkingRegistered - Fetching the user from the database.
 * @property {boolean} userRegistered - Fetching the user from the database.
 * @property {Error | null} registerError - Fetching the user from the database.
 */

/**
 * @type {UsersReducerState}
 */
const initialState = {
  user: {},
  fetching: false,
  checkingRegistered: false,
  registering: false,
  userRegistered: false,
  registerError: null,
  error: null,
};

/**
 * Users Reducer
 * @category Reducers
 * @function
 * @name usersReducer
 * @param {UsersReducerState} state
 * @param {Action} action
 * @returns {UsersReducerState} state
 */
export const usersReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case ATTEMPT_SIGNIN:
      return { ...state, fetching: true };
    case SIGNED_IN:
      return { ...state, user: action.payload, fetching: false };
    case SIGNIN_FAILED:
      return { ...state, user: {}, fetching: false, error: action.payload };
    case SIGNOUT:
      return { ...state, user: {}, error: null };
    case CHECK_USER_REGISTERED:
      return { ...state, checkingRegistered: true };
    case USER_ATTEMPT_REGISTER:
      return { ...state, checkingRegistered: false, registering: true };
    case USER_REGISTER_COMPLETE:
      return { ...state, registering: false, userRegistered: true };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        registering: false,
        userRegistered: false,
        registerError: action.payload,
      };
    
    default:
      return state;
  }
};
