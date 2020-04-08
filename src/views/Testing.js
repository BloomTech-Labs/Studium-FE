import React from 'react';
import styled from 'styled-components';
import { SynapsBrain } from '../components/SynapsBrain/SynapsBrain.js';
import { CreateButton } from '../components/Button/CreateButton.js';
import CardAnimation from '../images/svgAnimation/CardAnimation.js';
import { SmallFlashCard } from '../components/SmallFlashCard/SmallFlashCard.js';
import {PreviewDeckCards} from '../components/PreviewDeckCards/PreviewDeckCards.js';
import {useState} from 'react';


export const Testing = () => {
  const [state, setState] = useState(false)
  return ( <StyledTesting>
    <CardAnimation open = {state}/>
    <button onClick = {()=> setState(!state)}> 
    ugly </button>
  </StyledTesting> );
  
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 800px;
`;