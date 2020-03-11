import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { TitleText, PreviewDeckCards } from '../components';
import { useAppHooks } from '../customHooks/useAppHooks.js';

/**
 * Preview Deck
 * @category Views
 * @component
 * @example return (<PreviewDeck />);
 */
export const PreviewDeck = props => {
  // @type CardState
  const { cardsState, pathPushedState } = useAppHooks();
  
  return (
    
    <StyledPreviewDeck>
      <TitleText
        text={ ( pathPushedState && pathPushedState.deck_name ) || 'Preview' }/>
      <StyledPreviewDeckHolder>
        { cardsState.cards.length > 0 &&
        cardsState.cards.filter(
          card => card.deck_id === pathPushedState.deck_id ).map(
          card => {
            console.log( card );
            return <PreviewDeckCards key={ card.card_id } card={ card }/>;
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

