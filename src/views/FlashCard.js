import React from 'react';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';

const FlashCard = props => {



  const deck = props.history.location.state;
  return (
    <StyledFlashCard>

      <StyledTitleText text={deck.deck_name} />
    </StyledFlashCard>
  );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
  width: 100%;
`;

export default FlashCard;
