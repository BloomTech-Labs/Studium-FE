import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';

/**
 * @typedef RootState
 * @property {UsersReducerState} usersState
 * @property {PhotoReducerState} photosState
 *
 */
export default combineReducers( {
  usersState: usersReducer, photosState: photosReducer,
} );
