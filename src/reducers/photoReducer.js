import {
  UPLOADING_PHOTO_FAILED,
  UPLOADING_PHOTO_SUCCESS,
  UPLOADING_PHOTO_PROGRESS,
  UPLOADING_PHOTO_INIT,
} from '../actions/photo.js';

/**
 * @typedef {object} PhotoReducerState
 * @category Reducers
 * @property {Object.<Number, {Photo}>} photos
 */
const initialState = {
  photos: {},
  isLoading: false,
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
 * Photos Reducer
 * @category Reducers
 *
 * @function
 * @name photosReducer
 * @param {PhotoReducerState} state
 * @param {Action} action
 * @returns {PhotoReducerState} state
 */
export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INIT_STATE':
      if (
        action.payload &&
        action.payload.name &&
        action.payload.name.includes('photos') &&
        action.payload.value
      ) {
        return action.payload.value;
      }
      return state;
    case UPLOADING_PHOTO_INIT:
      return {...state, isLoading: true, error: null};
    // case UPLOADING_PHOTO_PROGRESS:
    //   state.photos[action.payload.id] = action.payload;
    //   return {...state, photos: {...state.photos}};
    case UPLOADING_PHOTO_FAILED:
      return {...state, isLoading: false, error: action.payload};
    case UPLOADING_PHOTO_SUCCESS:
      return {...state, isLoading: false, photos: action.payload};
    default:
      return state;
  }
};
