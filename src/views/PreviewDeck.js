import React, {useEffect} from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {getAllCardsForDeck} from "../actions/cardActions.js";
import {TitleText, PreviewDeckCards, SearchBar} from "../components";
import {useAppHooks} from "../customHooks/useAppHooks.js";
import {Alert, Icon} from "antd";

/**
 * Preview Deck
 * @category Views
 * @component
 * @example return (<PreviewDeck />);
 */
export const PreviewDeck = ({getHooks}) => {
  // @type CardState
  const {cardsState, pathPushedState, dispatch, usersState} = getHooks(
    "PreviewDeck");
  
  useEffect(() => {
    
    if(pathPushedState === undefined){
    
    }else{
      dispatch(
        getAllCardsForDeck(pathPushedState.deck_id, usersState.user.uid));
    }
    
  }, [pathPushedState]);
  
  const getAlert = () => {
    if(cardsState.error){
      return <Alert
        message={cardsState.error.message}
        type="warning"
        closable
      />;
    }
  };
  
  return (
    <StyledPreviewDeck>
      {getAlert()}
      <TopContainer>
        <StyledIconLeft type="left"/>
        <p>Back</p>
        <SearchContainer>
          <SearchBar height={"23px"} borderRadius={"14px"}
                     onSearch={() => {
                     }}/>
        </SearchContainer>
        <p style={{marginRight: "9%"}}>Select</p>
      </TopContainer>
      <TitleText
        text={(pathPushedState && pathPushedState.deck_name) || "Preview"}
      />
      <StyledPreviewDeckHolder>
        <PreviewDeckCards key={0}/>
        {Object.values(cardsState.cards).filter(
          card => card.deck_id === pathPushedState.deck_id).map(
          card => {
            console.log(card);
            return <PreviewDeckCards key={card.card_id} card={card}/>;
          })}
      
      </StyledPreviewDeckHolder>
    </StyledPreviewDeck>
  );
  
};

PreviewDeck.propTypes = {};

const TopContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 12px;
width: 100vw;

`;

const StyledIconLeft = styled(Icon)`
margin-right: %9;
`;

const SearchContainer = styled.div`
max-width: 50%;
margin: 0 auto;
`;

const StyledPreviewDeck = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 1rem;
  max-width: 1140px;
  min-height: 90%;
  width: 100%;
  border-radius: 10px;
  background: ${props => props.theme.themeState.navBarLight};
`;

const StyledPreviewDeckHolder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: scroll;
  padding-bottom: 150px;
`;
