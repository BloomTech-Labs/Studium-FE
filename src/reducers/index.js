import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { photosReducer } from './photoReducer';

export default combineReducers( {
  users: usersReducer, photosReducer: photosReducer,
} );
