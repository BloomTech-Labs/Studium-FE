import React, { useState } from 'react';
import styled from 'styled-components';
import BigFlashCard from '../components/Styled/BigFlashCard';
import CardIcon from '../components/Styled/CardIcon';

const Testing = () => {
  
  return ( <StyledTesting>
    <CardIcon cardNumber={ 4 } width={ '40px' } height={ '50px' }
              whiteBorderWidth={ '1px solid white' }/>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;