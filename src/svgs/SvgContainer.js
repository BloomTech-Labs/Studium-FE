import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContainerDiv } from '../components';

/**
 * With Svg Wrapper
 *
 * @param {SvgComponent} svg
 * @param  {string} position
 * @param {string} width
 * @param {string} height
 * @returns React.FunctionComponent
 */
const SvgContainer = ( { position = 'relative', width = '100%', height = '100%', ...rest } ) => {
  return (
    <ContainerDiv position={ position } width={ width } height={ height }>
      { rest.children }
    </ContainerDiv>
  );
};

export default SvgContainer;

SvgContainer.propTypes = {
  height: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
  rest: PropTypes.object,
};