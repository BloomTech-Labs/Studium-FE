import React from 'react';
import styled from 'styled-components';

import CreateCard from '../components/Styled/StyledCreateCard.js';
export const Testing = () => {
  return (
    <StyledTesting>
      <CreateCard />
    </StyledTesting>
  );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;
