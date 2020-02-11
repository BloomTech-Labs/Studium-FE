import { action } from "./action";

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