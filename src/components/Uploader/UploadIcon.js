import React from 'react';
import styled from 'styled-components';
import Rectangle from '../../images/uploadIcon/Rectangle85.jpg';

/**
 * Upload Icon
 * @component
 * @example
 * return (
 *  <UploadIcon />
 * )
 */
export const UploadIcon = props => {
  return (
    <StyledUploadIcon data-testid="upload-icon">
      <img
        src={Rectangle}
        style={{height: '59px', width: '67px'}}
        alt={'upload icon'}
      />
    </StyledUploadIcon>
  );
};

const StyledUploadIcon = styled.div`
  display: block;
  z-index: 25;
  position: relative;
  width: 67px;
  height: 59px;
  background-color: transparent;
`;

UploadIcon.propTypes = {};
