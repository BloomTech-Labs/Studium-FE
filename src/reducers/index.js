import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';
import { deckReducer } from './decksReducer';

/**
 * @typedef {object} RootState
 * @property {UsersReducerState} usersState
 * @property {PhotoReducerState} photosState
 */

 /**
 * Combine Reducers
 *
 * @category Reducers
 * @returns RootState
 */

export default combineReducers({
  usersReducer: usersReducer,
  photosReducer: photosReducer,
  deckReducer: deckReducer
});
