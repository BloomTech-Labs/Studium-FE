import React from 'react';
import styled from 'styled-components';
import {PreviewDeckCards} from '../components/PreviewDeckCards/PreviewDeckCards';


export const Testing = () => {
  return (
  
  <StyledTesting>
    <PreviewDeckCards/>
  </StyledTesting>);
  
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 800px;
`;