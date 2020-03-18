import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { photosReducer } from "./photoReducer";
import { decksReducer } from "./decksReducer";
import { cardsReducer } from "./cardsReducer.js";

export const REDUCER_NAMES = [
  "usersState", "photosState", "decksState", "cardsState",
];
/**
 * @typedef {object} RootState
 * @property {UsersReducerState} usersState
 * @property {PhotoReducerState} photosState
 * @property {CardsState} cardsState
 */

/**
 * Combine Reducers
 *
 * @category Reducers
 * @returns RootState
 */
export default combineReducers( {
  usersState: usersReducer,
  photosState: photosReducer,
  decksState: decksReducer,
  cardsState: cardsReducer,
} );
