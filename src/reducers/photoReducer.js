import {
  UPLOADING_PHOTO_FAILED, UPLOADING_PHOTO_SUCCESS, UPLOADING_PHOTO_PROGRESS,
  UPLOADING_PHOTO_INIT,
} from '../actions/photo.js';

/**
 * @typedef {object} PhotoReducerState
 * @property {Object.<Number, {Photo}>} photos
 */
const initialState = {
  photos: {},
};

/**
 * @typedef Photo
 * @property {String} public_id
 * @property {String} url
 * @property {Error | undefined} error
 * @property {Number} progress
 *
 */

/**
 * @function
 * @name photosReducer
 * @param {PhotoReducerState} state
 * @param {Action} action
 * @returns {PhotoReducerState} state
 */
export const photosReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case UPLOADING_PHOTO_INIT:
    case UPLOADING_PHOTO_FAILED:
    case UPLOADING_PHOTO_SUCCESS:
    case UPLOADING_PHOTO_PROGRESS:
      state.photos[ action.payload.id ] = action.payload;
      return { photos: { ...state.photos } };
    
    default:
      return state;
  }
};
