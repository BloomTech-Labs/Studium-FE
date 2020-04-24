import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {message, Upload} from 'antd';
import {uploadImage} from '../../actions/photo';
import {UploadIcon} from './UploadIcon.js';
import * as PropTypes from 'prop-types';
import {useAppHooks} from '../../customHooks/useAppHooks.js';

/**
 * Image Uploader
 * @component
 * @example
 * return (
 *  <Uploader id={"1"} />
 * )
 */
export const Uploader = props => {
  debugger;
  /**
   * @type PhotoReducerState
   */
  const {photosState, usersState, dispatch} = useAppHooks('Uploader');
  const [photoObject, setPhotoObject] = useState(false);

  useEffect(() => {
    debugger;
    Object.values(photosState.photos).forEach(photoObject => {
      if (photoObject.id === props.id) {
        setPhotoObject(photoObject);
      }
    });
  }, [photosState, props.id]);

  const customRequest = file => {
    debugger;
    file.id = props.id;
    dispatch(uploadImage(file, usersState.user.uid));
  };

  const getUrl = () => {
    debugger;
    if (photoObject) {
      if (photoObject.file.uid) {
        return (
          'https://res.cloudinary.com/www-synapsapp-com/image/upload/v1582468332/' +
          photoObject.file.uid
        );
      }
    }
    return undefined;
  };

  const loadImage = photoObject && photoObject.file && photoObject.file.uid;
  return (
    <div data-testid="upload">
      <StyledUpload
        name="file"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={customRequest}
      >
        {loadImage ? (
          <img
            src={getUrl()}
            alt="avatar"
            style={{width: '100%'}}
            data-testid="upload-image"
          />
        ) : (
          <UploadIcon />
        )}
      </StyledUpload>
    </div>
  );
};

Uploader.propTypes = {
  id: PropTypes.string,
};

const StyledUpload = styled(Upload)`
  && {
    > .ant-upload.ant-upload-select-picture-card {
      border: none;
      background-color: transparent;
      width: 67px;
      height: 59px;
    }
  }
`;

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
