import { FETCHING_USER } from "../actions";

const initialState = {
  user: {}, fetching: false, error: null,
};
export const usersReducer = ( state = initialState, action ) => {
  
  switch( action.type ){
    case FETCHING_USER:
      return { fetching: true };
    default:
      return state;
  }
};
