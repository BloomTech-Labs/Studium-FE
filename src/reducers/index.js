import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';

/**
 * @typedef RootState
 * @property {UsersReducerState} usersReducer
 * @property {PhotosReducerState} photosReducer
 *
 *
 */
export default combineReducers({
 usersReducer,
  photosReducer,
});
