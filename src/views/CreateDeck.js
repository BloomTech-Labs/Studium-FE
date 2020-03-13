import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
import {DeckName} from '../components/CreateDeck/DeckName.js';
import {SmallDeckSvg} from '../components/SmallDeckSvg/SmallDeckSvg.js';
import {SynapsButton} from '../components/Button/SynapsButton.js';

/**
 * Create Deck View
 * @category Views
 * @component
 * @example return (<CreateDeck />);
 */
export const CreateDeck = props => {
  const [cardNum, setCardNum] = useState(1);
  const [visible, setVisible] = useState({
    front: false,
    back: false,
  });
  const [highlighted, setHighlighted] = useState({
    title: true,
    front: false,
    back: false,
  });

  const clickHandler = e => {
    e.preventDefault();
    let clickedOn = e.target.name;

    if (clickedOn == 'title' && highlighted.title == true) {
      setHighlighted({
        ...highlighted,
        title: false,
        front: true,
      });
      setVisible({
        ...visible,
        front: true,
      });
    } else if (clickedOn == 'front' && highlighted.front == true) {
      setHighlighted({
        ...highlighted,
        front: false,
        back: true,
      });
      setVisible({
        ...visible,
        back: true,
      });
    } else {
      setHighlighted({
        ...highlighted,
        back: false,
      });
    }
  };

  return (
    <StyledCreateDeck>
      <CardNameContainer>
        <CardHeaderContainer>
          <CreateCardTitleText text={'Create Deck'} />
          <SmallDeckSvg />
        </CardHeaderContainer>
        <DeckName clickHandler={clickHandler} highlighted={highlighted.title} />
      </CardNameContainer>
      <CreateCardContainer>
        <CreateCard
          drillName={'front'}
          clickHandler={clickHandler}
          highlighted={highlighted.front}
          visible={visible.front}
          text={`Card ${cardNum} - Front`}
        />
        <CreateCard
          drillName={'back'}
          clickHandler={clickHandler}
          highlighted={highlighted.back}
          visible={visible.back}
          text={`Card ${cardNum} - Back`}
        />
      </CreateCardContainer>
      <Bottom>
        <SynapsButton text={'Add Another Card'} type={'primary'} />
        <SynapsButton text={'Done'} type={'default'} />
      </Bottom>
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

const Bottom = styled.div`
  width: 100%;
  justify-self: flex-end;
  display: flex;
  justify-content: space-around;
`;
