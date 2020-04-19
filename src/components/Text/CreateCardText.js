import React from 'react';
import styled from 'styled-components';
import {APP_VIEW_MOBILE, APP_VIEW_DESKTOP} from '../../utilities/constants.js';

const StyledCardText = ({text, highlighted, appView}) => {
  return (
    <StyledTitle appView={appView} highlighted={highlighted}>
      {text}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1`
  color: ${props =>
    props.appView === APP_VIEW_DESKTOP ? '#36405C' : '#2A685B'};
  font-weight: ${props =>
    props.appView === APP_VIEW_MOBILE ? 'bold' : 'normal'};
  font-size: ${props => (props.appView === APP_VIEW_MOBILE ? '20px' : '24px')};
  text-align: left;
  ${props => (props.appView === APP_VIEW_DESKTOP ? 'line-height: 30px;' : '')}
`;

export default StyledCardText;
