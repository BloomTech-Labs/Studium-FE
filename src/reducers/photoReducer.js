import {
  UPLOADING_PHOTO_FAILED, UPLOADING_PHOTO_SUCCESS, UPLOADING_PHOTO_PROGRESS,
  UPLOADING_PHOTO_INIT,
} from '../actions';

const initialState = {
  photos: {},
};
export const photosReducer = ( state = initialState, action ) => {
  debugger;
  switch( action.type ){
    case UPLOADING_PHOTO_INIT:
      state.photos[ action.payload.id ] = action.payload;
      return { photos: { ...state.photos } };
    case UPLOADING_PHOTO_PROGRESS:
      state.photos[ action.payload.id ] = action.payload;
      return { photos: { ...state.photos } };
    case UPLOADING_PHOTO_SUCCESS:
      state.photos[ action.payload.id ] = action.payload;
      return { photos: { ...state.photos } };
    case UPLOADING_PHOTO_FAILED:
      state.photos[ action.payload.id ] = action.payload;
      return { photos: { ...state.photos } };
    
    default:
      return state;
  }
};
