import React from 'react';
import styled from 'styled-components';
import StyledCardDeck from '../components/Styled/StyledCardDeck.js';
import CardIcon from '../components/Styled/CardIcon.js';

const Testing = () => {
  return (
    <StyledTesting>
      <CardIcon />
    </StyledTesting>
  );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;
