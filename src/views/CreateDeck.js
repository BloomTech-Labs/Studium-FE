import React from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
import {DeckName} from '../components/CreateDeck/DeckName.js';
import {SvgContainer} from '../components/SvgContainer/SvgContainer.js';
import {ReactComponent as CardNumZeroSvg} from '../images/CardNumZero.svg';
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
      <CardNameContainer>
        <CardHeaderContainer>
          <CreateCardTitleText text={'Create Deck'} />
          <SvgContainer svg={CardNumZeroSvg} />
        </CardHeaderContainer>
        <DeckName />
      </CardNameContainer>
      <CreateCardContainer>
        <CreateCard frontCardText={`Card ${frontCardNum} - Front`} />
        <CreateCard backCardText={`Card ${backCardNum} - Back`} />
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardHeaderContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardNameContainer = styled.div`
  width: 100%;
  margin-bottom: 13px;
`;
