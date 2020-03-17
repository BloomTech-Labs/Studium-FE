import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {CreateCardTitleText} from '../components/Text/TitleText/CreateCardTitleText.js';
import {CreateCard} from '../components/CreateCard/CreateCard.js';
import {DeckName} from '../components/CreateDeck/DeckName.js';
import {SmallDeckSvg} from '../components/SmallDeckSvg/SmallDeckSvg.js';
import {SynapsButton} from '../components/Button/SynapsButton.js';
import {postDeck} from '../actions/decksActions.js';
import {useAppHooks} from '../customHooks/useAppHooks.js';
/**
 * Create Deck View
 * @category Views
 * @component
 * @example return (<CreateDeck />);
 */
export const CreateDeck = props => {
  const {
    pathname,
    changePath,
    dispatch,
    usersState,
    decksState,
    theme,
  } = useAppHooks();
  const [disableInput, setDisableInput] = useState(false);
  const [newDeck, setNewDeck] = useState({});
  const [newCard, setNewCard] = useState({});
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

  useEffect(() => {
    console.log('deck state', decksState);
  }, [newDeck.deck_name]);

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

  const changeHandler = e => {
    e.preventDefault();
    const targetName = e.target.name;
    console.log(targetName);
    switch (targetName) {
      case 'title':
        setNewDeck({deck_name: e.target.value});
        console.log(newDeck);
    }
  };

  const submitForm = () => {
    if (cardNum == 1) {
      dispatch(postDeck(usersState.user.uid, newDeck));
      setDisableInput(true);
    }
  };

  return (
    <StyledCreateDeck>
      <CardNameContainer>
        <CardHeaderContainer>
          <CreateCardTitleText text={'Create Deck'} />
          <SmallDeckSvg />
        </CardHeaderContainer>
        <DeckName
          newDeck={newDeck}
          disableInput={disableInput}
          name={'newDeck'}
          disableInput={disableInput}
          changeHandler={changeHandler}
          value={newDeck.deck_name}
          clickHandler={clickHandler}
          highlighted={highlighted.title}
        />
      </CardNameContainer>
      <CreateCardContainer>
        <CreateCard
          name={'newCardFront'}
          drillName={'front'}
          clickHandler={clickHandler}
          highlighted={highlighted.front}
          visible={visible.front}
          text={`Card ${cardNum} - Front`}
        />
        <CreateCard
          name={'newCardBack'}
          drillName={'back'}
          clickHandler={clickHandler}
          highlighted={highlighted.back}
          visible={visible.back}
          text={`Card ${cardNum} - Back`}
        />
      </CreateCardContainer>
      <Bottom>
        <SynapsButton
          onClick={submitForm}
          text={'Add Another Card'}
          type={'primaryCreateCard'}
        />
        <SynapsButton text={'Done'} type={'defaultCreateCard'} />
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
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;
