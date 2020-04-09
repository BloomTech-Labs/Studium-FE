import React from 'react';
import styled from 'styled-components';
import {ReactComponent as UploadButton} from '../../svgs/ImageUploadButton.svg';

/**
 * Upload Icon
 * @component
 * @example
 * return (
 *  <UploadIcon />
 * )
 */
export const UploadIcon = props => {
  return <StyledUploadIcon data-testid="upload-icon"></StyledUploadIcon>;
};

const StyledUploadIcon = styled(UploadButton)`
  display: block;
  z-index: 25;
  position: relative;
  width: 67px;
  height: 59px;
  background-color: transparent;
`;

UploadIcon.propTypes = {};
