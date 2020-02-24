import React, { useState } from 'react';
import styled from 'styled-components';
import BigFlashCard from '../components/Styled/BigFlashCard';

const Testing = () => {
  const onSearch = e => {
  
  };
  
  const card = {
    question: 'This is a question. ', answer: 'This is the answer',
  };
  const [ value, setValue ] = useState( '' );
  return ( <StyledTesting>
    <BigFlashCard flashCard={ card } flashImage={ '' }/>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;