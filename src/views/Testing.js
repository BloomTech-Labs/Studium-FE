import React from 'react';
import styled from 'styled-components';
import {PreviewDeckCards} from '../components/PreviewDeckCards/PreviewDeckCards';
import { ProtectedRoute } from '../routes';


export const Testing = (props) => {
  return (
  
  <StyledTesting>
    <ProtectedRoute {...props}>
      <PreviewDeckCards/>
    </ProtectedRoute>
  </StyledTesting>);
  
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 800px;
`