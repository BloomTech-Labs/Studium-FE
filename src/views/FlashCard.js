import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../components/TitleText/TitleText.js';
/**
 * FlashCard
 * @category Views
 * @component
 * @example return (<FlashCard />);
 */
export const FlashCard = props => {
  const deck = props.history.location.state;
  return (
    
    <StyledFlashCard>
      <TitleText text={ deck.deck_name }/>
    </StyledFlashCard>
  
  );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
  width: 100%;
`;

