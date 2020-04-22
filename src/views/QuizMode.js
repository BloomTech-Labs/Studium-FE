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
  const [notViewed, setNotViewed] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const deck = pathPushedState;

  useEffect(() => {
    let arrayii = cardsState.cards.filter(card => {
      return (
        card.deck_id === deck.deck_id &&
        !viewed.includes(card) &&
        !notViewed.includes(card)
      );
    });
    setNotViewed([...arrayii, ...notViewed]);
  }, [cardsState.cards]);

  //  useEffect(() => {
  //
  //    let newArray = cardsState.cards.filter(card => {
  //      return card.deck_id === deck.deck_id && !notViewed.includes(card);
  //    });
  //    setNotViewed([...newArray, ...notViewed]);
  //  }, [cardsState.cards]);

  function back() {
    if (viewed.length > 0) {
      let lastCard = viewed.pop();
      setNotViewed([lastCard, ...notViewed]);
      setViewed([...viewed]);
    }
  }

  function next() {
    if (notViewed.length > 1) {
      let firstCard = notViewed.shift();
      setNotViewed([...notViewed]);
      setViewed([...viewed, firstCard]);
    }
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

    let currentCard = notViewed[0];
    currentCard.quiz_results = quiz_results;
    currentCard.last_viewed = moment()
      .unix()
      .toString();

    // notViewed[0] = currentCard;
    dispatch(updateCard(currentCard, usersState.user.uid));
  }

  function getCardsNotViewed() {
    const arr = notViewed.filter(card => {
      let if1 = moment().diff(moment.unix(card.last_viewed), 'minutes');
      let if2 = moment().diff(moment.unix(card.last_viewed), 'hours');
      debugger;
      if (
        !card.quiz_results ||
        card.quiz_results === 0 ||
        card.quiz_results === 1
      ) {
        return true;
      } else if (card.quiz_results === 2) {
        if (moment().diff(moment.unix(card.last_viewed), 'minutes') > 10) {
          return true;
        } else {
          return false;
        }
      } else if (card.quiz_results === 3) {
        if (moment().diff(moment.unix(card.last_viewed), 'hours') > 4) {
          return true;
        } else {
          return false;
        }
      }
    });
    if (arr.length === 0) {
      setQuizComplete(true);
      setTimeout(() => {
        setQuizComplete(false);
      }, 5000);
      return cardsState.cards.filter(card => {
        return card.deck_id === deck.deck_id;
      });
    }
    return arr;
  }

  return (
    <Container data-testid={'quiz-mode-container'}>
      <TitleText text={deck.deck_name} color={'#2A685B'} />
      {notViewed.length > 0 && (
        <>
          {quizComplete && <h1>Quiz Complete!</h1>}
          <FlashCardContainer data-testid={'flash-card-container'}>
            <BigFlashCard flashCard={getCardsNotViewed()[0]}> </BigFlashCard>
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
