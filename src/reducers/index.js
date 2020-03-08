import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';

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
export default combineReducers( {
  usersState: usersReducer, photosState: photosReducer,
} );
