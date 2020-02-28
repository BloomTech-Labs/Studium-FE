import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = props => {

  

  return <Container {...props}>{props.children}</Container>;
};

StyledContainer.propTypes = {
  navBarVis: PropTypes.bool,
  justifyContent: PropTypes.string,
  overFlowY: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  margin: PropTypes.string,
  top: PropTypes.string,
};

const Container = styled.div`
  box-sizing: border-box;
  top: ${props => props.top || 0};
  margin: ${props => props.margin || '0'};
  position: ${props => props.position || 'absolute'};
  width: 100%;
  height: ${props => props.height || '100%'};
  max-height: ${props => props.maxHeight || '100%'};
  max-width: 700px;
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  overflow-y: ${props => props.overFlowY || 'scroll'};

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
  }
`;

export default StyledContainer;
