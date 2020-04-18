import React from 'react';
import styled from 'styled-components';
import {ReactComponent as UploadButton} from '../../svgs/ImageUploadButton.svg';
import {useAppHooks} from '../../customHooks/useAppHooks.js';
/**
 * Upload Icon
 * @component
 * @example
 * return (
 *  <UploadIcon />
 * )
 */

export const UploadIcon = props => {
  const {appView} = useAppHooks();

  return (
    <StyledUploadIcon
      appView={appView}
      data-testid="upload-icon"
    ></StyledUploadIcon>
  );
};

const StyledUploadIcon = styled(UploadButton)`
  display: block;
  z-index: 25;
  position: relative;
  width: ${props => (props.appView === 'APP_VIEW_MOBILE' ? '67px' : '95px')};
  height: ${props => (props.appView === 'APP_VIEW_MOBILE' ? '59px' : '107px')};
  background-color: transparent;
`;

UploadIcon.propTypes = {};
