import React from 'react';
import styled from 'styled-components';
import { CardIcon } from '../components';

export const Testing = () => {
  return ( <StyledTesting>
    <CardIcon/>
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

