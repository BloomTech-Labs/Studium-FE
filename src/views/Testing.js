import React, { useState } from 'react';
import styled from 'styled-components';
import { uploadImage } from '../actions';
import StyledUploader from '../components/StyledUploader/StyledUploader';

const Testing = () => {
  
  return ( <StyledTesting>
    <StyledUploader id={ 1 }/>
    <StyledUploader id={ 2 }/>
    <StyledUploader id={ 3 }/>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;