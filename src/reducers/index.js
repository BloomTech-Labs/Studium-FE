import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';
import { cardsReducer } from './cardsReducer';
import { decksReducer } from './decksReducer';

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

export default combineReducers({
  usersState: usersReducer,
  photosState: photosReducer,
  decksReducer: decksReducer,
  cardsState: cardsReducer
});
