import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {TitleText} from '../components/Text/TitleText/TitleText.js';
import BigFlashCard from '../components/BigFlashCard/BigFlashCard.js';
import {ReactComponent as SvgBack} from '../svgs/BackButton.svg';
import {ReactComponent as SvgNext} from '../svgs/NextButton.svg';

export default function QuizMode({getHooks}){
  const {cardsState, pathPushedState} = getHooks();
  const [notViewed, setNotViewed] = useState([]);
  const [Viewed, setViewed] = useState([]);
  const deck = pathPushedState;
  
  useEffect(() => {
    
    let arrayii = cardsState.cards.filter(card => {
      return card.deck_id === deck.deck_id && !Viewed.includes(card) &&
        !notViewed.includes(card);
    });
    setViewed([...arrayii, Viewed]);
  }, [cardsState.cards]);
  
  //  useEffect(() => {
  //
  //    let newArray = cardsState.cards.filter(card => {
  //      return card.deck_id === deck.deck_id && !notViewed.includes(card);
  //    });
  //    setNotViewed([...newArray, ...notViewed]);
  //  }, [cardsState.cards]);
  
  function back({}){
    
    let lastCard = Viewed.pop();
    setNotViewed([...notViewed, lastCard]);
    setViewed([...Viewed, lastCard]);
  }
  
  function next({}){
    let firstCard = notViewed.shift();
    setNotViewed([...notViewed, firstCard]);
    setViewed([...Viewed, firstCard]);
  }
  
  return (
    <Container>
      <TitleText text={deck.deck_name} color={'#2A685B'}/>
      {notViewed.length > 0 &&
      <BigFlashCard flashCard={notViewed[0]}> </BigFlashCard>}
      
      <SvgBack onClick={() => back()}/>
      <SvgNext onClick={() => next()}/>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`;

