import React, {useState} from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
import {DeckName} from '../components/CreateDeck/DeckName.js';
import {SmallDeckSvg} from '../components/SmallDeckSvg/SmallDeckSvg.js';
/**
 * Create Deck View
 * @category Views
 * @component
 * @example return (<CreateDeck />);
 */
export const CreateDeck = props => {
  const [frontCardNum, setFrontCardNum] = useState(1);
  const [backCardNum, setBackCardNum] = useState(1);
  const [frontVisible, setFrontVisible] = useState(true);
  const [backVisible, setBackVisible] = useState(true);
  const [highlighted, setHighlighted] = useState(false);

  return (
    <StyledCreateDeck>
      <CardNameContainer>
        <CardHeaderContainer>
          <CreateCardTitleText text={'Create Deck'} />
          <SmallDeckSvg />
        </CardHeaderContainer>
        <DeckName highlighted={highlighted} />
      </CardNameContainer>
      <CreateCardContainer>
        <CreateCard
          visible={frontVisible}
          frontCardText={`Card ${frontCardNum} - Front`}
        />
        <CreateCard
          visible={backVisible}
          backCardText={`Card ${backCardNum} - Back`}
        />
      </CreateCardContainer>
    </StyledCreateDeck>
  );
};

CreateDeck.propTypes = {};

const StyledCreateDeck = styled.div`
  width: 315px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CreateCardContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled.div`
  width: 100%;
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardNameContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
