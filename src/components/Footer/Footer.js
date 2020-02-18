import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooter></StyledFooter>
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledFooter = styled.div`
  margin-top: auto;
  padding: 3em;
  background-color: #c4c4c4;
`;
