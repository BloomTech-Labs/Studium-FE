import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {TitleText} from '../components/Text/TitleText/TitleText.js';
import BigFlashCard from '../components/BigFlashCard/BigFlashCard.js';
import {ReactComponent as SvgBack} from '../svgs/BackButton.svg';
import {ReactComponent as SvgNext} from '../svgs/NextButton.svg';

export default function QuizMode({getHooks}){
  const {cardsState, pathPushedState} = getHooks();
  const [notViewed, setNotViewed] = useState([]);
  const [viewed, setViewed] = useState([]);
  const deck = pathPushedState;
  
  useEffect(() => {
    
    let arrayii = cardsState.cards.filter(card => {
      return card.deck_id === deck.deck_id && !viewed.includes(card) &&
        !notViewed.includes(card);
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
  
  function back(){
    debugger;
    if(viewed.length > 0){
      let lastCard = viewed.pop();
      setNotViewed([lastCard, ...notViewed]);
      setViewed([...viewed]);
    }
  }
  
  function next(){
    debugger;
    if(notViewed.length > 1){
      let firstCard = notViewed.shift();
      setNotViewed([...notViewed]);
      setViewed([...viewed, firstCard]);
    }
  }
  
  return (
    <Container data-testid={'quiz-mode-container'}>
      <TitleText text={deck.deck_name} color={'#2A685B'}/>
      {notViewed.length > 0 &&
      <FlashCardContainer data-testid={'flash-card-container'}>
        <BigFlashCard flashCard={notViewed[0]}> </BigFlashCard>}
      </FlashCardContainer>}
      <ButtonContainer data-testid={'button-card-container'}>
        <Button>
          <SvgBack onClick={() => back()}/>
        </Button>
        <Button>
          <SvgNext onClick={() => next()}/>
        </Button>
      
      </ButtonContainer>
    </Container>
  );
}
const Button = styled.div`

`;

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

`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items:  center;
    flex-direction: column;
`;

