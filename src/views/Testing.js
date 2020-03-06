import React from 'react';
import styled from 'styled-components';

import {uploadImage} from '../actions';
import StyledUploader from '../components/StyledUploader/StyledUploader';
import CreateCard from '../components/Styled/StyledCreateCard.js';
const Testing = () => {
  return (
    <StyledTesting>
      <CreateCard />
    </StyledTesting>
  );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;
