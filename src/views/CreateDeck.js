import React from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
/**
 * Create Deck View
 * @category Views
 * @component
 * @example return (<CreateDeck />);
 */
export const CreateDeck = props => {
  let frontCardNum = 1;
  let backCardNum = 1;

  return (
    <StyledCreateDeck>
      <CreateCardTitleText text={'Create Deck'} />
      <CreateCard frontCardText={`Card ${frontCardNum} - Front`} />
      <CreateCard backCardText={`Card ${backCardNum} - Back`} />
    </StyledCreateDeck>
  );
};

CreateDeck.propTypes = {};

const StyledCreateDeck = styled.div`
  width: 315px;
  border: red 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
