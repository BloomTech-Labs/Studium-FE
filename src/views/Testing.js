import React from 'react';
import styled from 'styled-components';
import { SynapsBrain } from '../components/SynapsBrain/SynapsBrain.js';
import { CreateButton } from '../components/Button/CreateButton.js';
import SvgComponent from '../images/svgAnimation/CardAnimation.js';
import { SmallFlashCard } from '../components/SmallFlashCard/SmallFlashCard.js';
import {PreviewDeckCards} from '../components/PreviewDeckCards/PreviewDeckCards.js';

export const Testing = () => {
  return ( <StyledTesting>
    <SvgComponent />
  </StyledTesting> );
  
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 800px;
`;