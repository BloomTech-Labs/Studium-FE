import React from 'react';
import styled from 'styled-components';
import SvgComponent from '../images/Component.js';

/**
 * Testing
 * @category Views
 * @component
 * @example return (<Testing />);
 */
export const Testing = () => {
  return ( <StyledTesting>
    <SvgComponent></SvgComponent>
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

