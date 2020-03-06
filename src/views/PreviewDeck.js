import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TitleText, PreviewDeckCards } from '../components';

const decks = [
  { card_name: 'Name this organ' }, { card_name: 'Define Proximal.' },
  { card_name: '---- means towards the front' },
];

/**
 * @function
 * @name PreviewDeck
 * @returns React.Component
 */
export const PreviewDeck = props => {
  console.log( 'props', props );
  return (
    
    <StyledPreviewDeck>
      <TitleText text={ 'Preview' }/>
      <StyledPreviewDeckHolder>
        { decks.map( deck => {
          console.log( decks );
          return <PreviewDeckCards deck={ deck }/>;
        } ) }
      
      </StyledPreviewDeckHolder>
    </StyledPreviewDeck>
  
  );
};

PreviewDeck.propTypes = {};

const StyledPreviewDeck = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 90%;
  width: 100%;

`;

const StyledPreviewDeckHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

