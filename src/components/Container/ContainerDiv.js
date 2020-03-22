import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Container Div
 *
 * @description Container component that is easy to set up and use to keep
 * other components within a container.
 *
 * @component
 * @example
 * return (
 *  <ContainerDiv >
 *    <SynapsButton text="Click Me" />
 *  </ContainerDiv>
 *  )
 */
export const ContainerDiv = props => {
  return <Div { ...props }>{ props.children }</Div>;
};

ContainerDiv.propTypes = {
  navBarVis: PropTypes.bool,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  overFlowY: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.string,
  heightMax: PropTypes.string,
  margin: PropTypes.string,
  top: PropTypes.string,
  alignItems: PropTypes.string,
};

const Div = styled.div`
  box-sizing: border-box;
  top: ${ props => props.top || 0 };
  margin: ${ props => props.margin || '0' };
  position: ${ props => props.position || 'absolute' };
  width: ${ props => props.width || '100vw' };
  height: ${ props => props.height || '100%' };
  max-height: ${ props => props.maxHeight || '100%' };
  max-width: 100vw;
  display: flex;
  align-items: ${ props => props.alignItems || 'center' };
  flex-direction: ${ props => props.flexDirection || 'column' };
  justify-content: ${ props => props.justifyContent || 'center' };
  overflow-y: ${ props => props.overFlowY || 'hidden' };

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
  }
`;

