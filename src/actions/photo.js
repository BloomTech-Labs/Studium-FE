import { createAxios } from '../utilities/createAxios';

export const UPLOADING_PHOTO_INIT = 'UPLOADING_PHOTO_INIT';
export const UPLOADING_PHOTO_PROGRESS = 'UPLOADING_PHOTO_PROGRESS';
export const UPLOADING_PHOTO_SUCCESS = 'UPLOADING_PHOTO_SUCCESS';
export const UPLOADING_PHOTO_FAILED = 'UPLOADING_PHOTO_FAILED';
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';

/**
 * @param file
 * @returns {function(*): *}
 */
export const uploadImage = file => dispatch => {
  dispatch({ type: UPLOADING_PHOTO_INIT, payload: file });
  const request = createAxios();
  const data = new FormData();
  data.append('file', file.file);
  return request
    .post('/photo/upload', data, {
      onUploadProgress: ProgressEvent => {
        file.progress = ProgressEvent.loaded / ProgressEvent.total;
        dispatch({ type: UPLOADING_PHOTO_PROGRESS, payload: file });
      },
    })
    .then(res => {
      console.log(res);
      file.progress = 0;
      file.uploading = false;
      file.file = {
        public_id: res.data.photo.public_id,
        url: res.data.photo.photo_url,
      };
      dispatch({ type: UPLOADING_PHOTO_SUCCESS, payload: file });
    })
    .catch(err => {
      console.log(err);
      file.error = err;
      dispatch({ type: UPLOADING_PHOTO_FAILED, payload: file });
    });
};
