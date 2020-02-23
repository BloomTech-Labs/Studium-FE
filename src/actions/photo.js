import { createAxios } from '../util/createAxios';

export const uploadPhoto = ( stuff ) => {
  const request = createAxios();
  let data = new FormData();
  data.append( 'file', stuff.file );
  request
    .post( '/photo/upload', data, {
      onUploadProgress: ProgressEvent => {
        debugger;
        stuff.onProgress( ProgressEvent );
      },
    } )
    .then( response => {
      debugger;
      stuff.onSuccess( response );
      
    } ).catch( err => {
    debugger;
    stuff.onError( err );
  } );
  
};
