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

const StyledTitle = styled.div`
  color: ${props => (props.highlighted ? '#4CB69F' : '#888888')};
  ${props => (props.appView === APP_VIEW_DESKTOP ? 'color: #36405C' : '')};
  font-weight: ${props =>
    props.appView === APP_VIEW_MOBILE ? 'bold' : 'normal'};
  font-size: ${props => (props.appView === APP_VIEW_MOBILE ? '20px' : '24px')};
  text-align: left;
  ${props => (props.appView === APP_VIEW_DESKTOP ? 'line-height: 30px;' : '')}
  ${props => (props.appView === APP_VIEW_DESKTOP ? 'margin-bottom: 10px;' : '')}
`;

export default StyledCardText;
