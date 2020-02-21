import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledDeckPreview from '../components/Styled/StyledDeckPreview';

const decks = [
  { card_name: 'Name this organ'}, 
  { card_name: 'Define Proximal.'},
  { card_name: '---- means towards the front.'}
]

const PreviewDeck = props => {
  console.log('props', props);
  return ( 
  <StyledPreviewDeck>
    <StyledTitleText text={ 'Preview' }/>
    <StyledPreviewDeckHolder>
      {decks.map(deck => {
        return <StyledDeckPreview deck={deck} />
      })}
    <StyledDeckPreview  />
    </StyledPreviewDeckHolder>
  </StyledPreviewDeck> );
};

PreviewDeck.propTypes = {};

const StyledPreviewDeck = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
min-height: 90%;
/* width: 100% */
`;

const StyledPreviewDeckHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin:  0 auto;
  justify-content: space-around;
`

export default PreviewDeck;