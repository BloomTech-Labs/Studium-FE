import React from 'react';
import styled from 'styled-components';
import UploadIcon from '../StyledUploader/UploadIcon.js';
import StyledTextArea from './StyledTextArea.js';
const CreateCard = props => {
  return (
    <StyledCreateCard>
      <StyledTextArea />
      <UploadIcon />
    </StyledCreateCard>
  );
};

CreateCard.propTypes = {};

const StyledCreateCard = styled.div`
  width: 314px;
  height: 149px;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default CreateCard;
