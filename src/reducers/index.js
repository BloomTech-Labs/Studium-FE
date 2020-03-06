import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';
import { deckReducer } from './decksReducer';

/**
 * @typedef rootReducer
 * @property {UsersReducerState} user
 * @property {} user
 *
 *
 */

export default combineReducers({
  usersReducer: usersReducer,
  photosReducer: photosReducer,
  deckReducer: deckReducer
});
