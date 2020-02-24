import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import { uploadImage } from '../../actions/photo';
import UploadIcon from './UploadIcon';
import { useDispatch, useSelector } from 'react-redux';

function beforeUpload( file ){
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if( !isJpgOrPng ){
    message.error( 'You can only upload JPG/PNG file!' );
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if( !isLt2M ){
    message.error( 'Image must smaller than 2MB!' );
  }
  return isJpgOrPng && isLt2M;
}

const StyledUploader = ( props ) => {
  
  const photoReducer = useSelector( state => state.photosReducer );
  const dispatch = useDispatch();
  const [ photoObject, setPhotoObject ] = useState( false );
  
  useEffect( () => {
    debugger;
    Object.values( photoReducer.photos ).forEach( photoObject => {
      if( photoObject.id === props.id ){
        setPhotoObject( photoObject );
      }
    } );
  }, [ photoReducer ] );
  
  const customRequest = ( file ) => {
    file.id = props.id;
    dispatch( uploadImage( file ) );
  };
  
  const getUrl = () => {
    if( photoObject ){
      if( photoObject.file.url ){
        return photoObject.file.url;
      }
    }
    return undefined;
  };
  const loadImage = photoObject && photoObject.file && photoObject.file.url;
  return ( <StyledUpload
    name="file"
    listType="picture-card"
    className="avatar-uploader"
    showUploadList={ false }
    beforeUpload={ beforeUpload }
    customRequest={ customRequest }
  >
    { loadImage ?
      <img src={ getUrl() } alt='avatar' style={ { width: '100%' } }/> :
      <UploadIcon/> }
  </StyledUpload> );
  
};

const StyledUpload = styled( Upload )`
  && {
  > .ant-upload.ant-upload-select-picture-card{
    
    border: none;
    background-color: transparent;
    width: 67px;
    height: 59px;
  }
  }
`;

export default StyledUploader;