import { action } from "./action";

export const FETCHING_USER = "FETCHING_USER";

export const fetchUser = ( dispatch ) => {
  dispatch( action( FETCHING_USER ) );
};