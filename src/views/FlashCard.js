import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';

const FlashCard = props => {
  return ( <StyledFlashCard>
    <StyledTitleText text={ 'Deck name?' }/>
  </StyledFlashCard> );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
width: 100%
`;

export default FlashCard;