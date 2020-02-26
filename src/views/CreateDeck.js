import React from 'react';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';

const CreateDeck = props => {
  return (
    <StyledCreateDeck>
      <StyledTitleText text={'Create Deck'} />
    </StyledCreateDeck>
  );
};

CreateDeck.propTypes = {};

const StyledCreateDeck = styled.div`
  width: 100%;
`;

export default CreateDeck;
