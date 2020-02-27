import React from 'react';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';

const FlashCard = props => {
/*eslint react/prop-types:0*/
/*eslint react/prop-types:0*/
/*eslint react/prop-types:0*/
  const deck = props.history.location.state;
  return (
    <StyledFlashCard>
/*eslint react/prop-types:0*/
      <StyledTitleText text={deck.deck_name} />
    </StyledFlashCard>
  );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
  width: 100%;
`;

export default FlashCard;
