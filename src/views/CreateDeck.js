import React from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
import {FormInput} from '../components/FormItems/Input/FormInput.js';
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
      <DeckNameContainer>
        <DeckTitlePrompt>Title of Deck</DeckTitlePrompt>
        <FormInput />
      </DeckNameContainer>
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

const DeckNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DeckTitlePrompt = styled.h1`
  color: #888888;
  font-weight: bold;
  font-size: 26px;
  text-align: left;
`;
