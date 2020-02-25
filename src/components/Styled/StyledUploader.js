import React from 'react';

import { Upload, Icon, message } from 'antd';
import { uploadPhoto } from '../../actions/photo';

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

class StyledUploader extends React.Component{
  state = {
    loading: false, imageUrl: false,
  };
  
  handleChange = info => {
    if( info.file.status === 'uploading' ){
      this.setState( { loading: true } );
      return;
    }
    if( info.file.status === 'done' ){
      // Get this url from response in real world.
      debugger;
      this.setState( { imageUrl: info.file.response.data.image } );
    }
  };
  
  customRequest = ( stuff ) => {
    uploadPhoto( stuff );
  };
  
  render(){
    const uploadButton = ( <div>
      <Icon type={ this.state.loading ? 'loading' : 'plus' }/>
      <div className="ant-upload-text">Upload</div>
    </div> );
    const { imageUrl } = this.state;
    return ( <Upload
      name="file"
      action={ 'http://localhost:5000/api/photo/upload' }
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={ false }
      beforeUpload={ beforeUpload }
      onChange={ this.handleChange }
    >
      { imageUrl ?
        <img src={ imageUrl } alt="avatar" style={ { width: '100%' } }/> :
        uploadButton }
    </Upload> );
  }
}

export default StyledUploader;