import { FETCHING_USER, FETCHED_USER } from "../actions";

const initialState = {
  user: {}, fetching: false, error: null,
};
export const usersReducer = ( state = initialState, action ) => {
  
  switch( action.type ){
    case FETCHING_USER:
      return { fetching: true };
    case FETCHED_USER:
      return { fetching: false, user: action.payload };
    default:
      return state;
  }
};
