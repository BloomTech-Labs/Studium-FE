import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {TitleText} from '../components/Text/TitleText/TitleText.js';
import BigFlashCard from '../components/BigFlashCard/BigFlashCard.js';
import {ReactComponent as SvgBack} from '../svgs/BackButton.svg';
import {ReactComponent as SvgNext} from '../svgs/NextButton.svg';
import {updateCard} from '../actions/cardActions.js';
import moment from 'moment';

export default function QuizMode({getHooks}) {
  const {cardsState, pathPushedState, dispatch, usersState} = getHooks();
  const [quizCards, setQuizCards] = useState({});
  const [filteredQuizCards, setFilteredQuizCards] = useState({});
  const [displayedCard, setDisplayedCard] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const deck = pathPushedState;

  useEffect(() => {
    if (quizComplete) {
      setTimeout(() => {
        setQuizComplete(false);
      }, 5000);
    }
  }, [quizComplete]);

  useEffect(() => {
    const displayCards = {};
    let arrNums = [];
    for (let i = 0; i < cardsState.cards.length; i++) {
      arrNums.push(i);
    }
    cardsState.cards.forEach(card => {
      let randomIndex = Math.floor(Math.random() * arrNums.length);
      let displayIndex = arrNums[randomIndex];
      let firstHalf = arrNums.slice(0, randomIndex);
      let secondHalf = arrNums.slice(randomIndex + 1, arrNums.length);
      arrNums = [...firstHalf, ...secondHalf];

      displayCards[displayIndex] = card;
    });
    setQuizCards(displayCards);

    //BELOW REPLACES PREVIOUS GETFILTEREDCARDS() FUNCTION
    let filteredCards = {...displayCards};

    Object.keys(filteredCards).map(key => {
      let currentCard = filteredCards[key];

      let if1 = moment().diff(moment.unix(currentCard.last_viewed), 'minutes');
      let if2 = moment().diff(moment.unix(currentCard.last_viewed), 'hours');

      if (!currentCard.quiz_results) {
        return;
      } else if (currentCard.quiz_results === 2) {
        if (
          moment().diff(moment.unix(currentCard.last_viewed), 'minutes') > 10
        ) {
          return;
        } else {
          delete filteredCards[key];
        }
      } else if (currentCard.quiz_results === 3) {
        if (moment().diff(moment.unix(currentCard.last_viewed), 'hours') > 4) {
          return;
        } else {
          delete filteredCards[key];
        }
      }
    });

    setFilteredQuizCards(filteredCards);

    let keys = Object.keys(filteredCards);
    let arrKeysCurrentIndex = keys.indexOf(cardIndex.toString());
    let arrKeysNextIndex = arrKeysCurrentIndex + 1;
    let arrKeysPrevIndex = arrKeysCurrentIndex - 1;
    let currentCardKey = keys[arrKeysCurrentIndex];
    let nextCardKey = keys[arrKeysNextIndex];
    let prevCardKey = keys[arrKeysPrevIndex];

    if (
      Object.keys(displayedCard).length === 0 &&
      Object.keys(filteredCards).length > 0
    ) {
      setCardIndex(keys[0]);
      setDisplayedCard(filteredCards[keys[0]]);
    } else if (
      Object.keys(displayedCard).length > 0 &&
      Object.keys(filteredCards).length > 0
    ) {
      if (currentCardKey === undefined) {
        if (nextCardKey === undefined) {
          setCardIndex(prevCardKey);
          setDisplayedCard(filteredCards[prevCardKey]);
        } else {
          setCardIndex(nextCardKey);
          setDisplayedCard(filteredCards[nextCardKey]);
        }
      }
    } else if (
      currentCardKey === undefined &&
      Object.keys(filteredQuizCards).length === 0
    ) {
      let QuizCardsKeys = Object.keys(quizCards);
      setFilteredQuizCards(quizCards);
      setDisplayedCard(quizCards[QuizCardsKeys[0]]);
      setQuizComplete(true);
    } else if (currentCardKey !== undefined) {
      setCardIndex(currentCardKey);
      setDisplayedCard(filteredCards[currentCardKey]);
    }
  }, [cardsState.cards]);

  function back() {
    let keys = Object.keys(filteredQuizCards);
    let arrKeysCurrentIndex = keys.indexOf(cardIndex.toString());
    let arrKeysPrevIndex = arrKeysCurrentIndex - 1;
    let prevCardKey = keys[arrKeysPrevIndex];

    if (prevCardKey !== undefined) {
      setCardIndex(prevCardKey);
      setDisplayedCard(filteredQuizCards[prevCardKey]);
    }
    debugger;
  }

  function next() {
    let keys = Object.keys(filteredQuizCards);
    let arrKeysCurrentIndex = keys.indexOf(cardIndex.toString());
    let arrKeysNextIndex = arrKeysCurrentIndex + 1;
    let nextCardKey = keys[arrKeysNextIndex];

    if (nextCardKey !== undefined) {
      setCardIndex(nextCardKey);
      setDisplayedCard(filteredQuizCards[nextCardKey]);
    }
    debugger;
  }

  function updateQuizResults(name) {
    let quiz_results;
    switch (name) {
      case 'Nope':
        quiz_results = 1;
        break;
      case 'Sort of':
        quiz_results = 2;
        break;
      case '100%':
        quiz_results = 3;
    }

    let currentCard = quizCards[cardIndex];
    currentCard.quiz_results = quiz_results;
    currentCard.last_viewed = moment()
      .unix()
      .toString();

    dispatch(updateCard(currentCard, usersState.user.uid));
  }

  return (
    <Container data-testid={'quiz-mode-container'}>
      <TitleText text={deck.deck_name} color={'#2A685B'} />
      {Object.keys(filteredQuizCards).length > 0 &&
        Object.keys(filteredQuizCards)[0] && (
          <>
            {quizComplete && <h1>Quiz Complete!</h1>}
            <FlashCardContainer data-testid={'flash-card-container'}>
              <BigFlashCard flashCard={displayedCard}> </BigFlashCard>
            </FlashCardContainer>
          </>
        )}

      <ButtonContainer data-testid={'button-card-container'}>
        <Button>
          <SvgBack onClick={() => back()} />
        </Button>
        <Button onClick={() => updateQuizResults('Nope')}>Nope</Button>
        <Button onClick={() => updateQuizResults('Sort of')}>Sort of</Button>
        <Button onClick={() => updateQuizResults('100%')}>100%</Button>
        <Button>
          <SvgNext onClick={() => next()} />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Button = styled.div``;

const FlashCardContainer = styled.div`
  margin-bottom: 2rem;
  border: 1px solid red;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
