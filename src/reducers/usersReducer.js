import {
  FETCHING_USER, FETCHED_USER, SIGNED_IN, SIGNIN_FAILED, SIGNOUT, ATTEMPT_SIGNIN,
} from '../actions';

const initialState = {
  user: {}, fetching: false, error: null,
};
export const usersReducer = ( state = initialState, action ) => {
  
  switch( action.type ){
    case ATTEMPT_SIGNIN:
      return { fetching: true };
    case SIGNED_IN:
      return { user: action.payload, fetching: false };
    case SIGNIN_FAILED:
      return { user: {}, fetching: false, error: action.payload };
    case SIGNOUT:
      return { user: {}, error: null };
    
    default:
      return state;
  }
};
