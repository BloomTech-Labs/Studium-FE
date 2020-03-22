import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {
  SmallFlashCard,
  TitleText,
  SearchBar,
  PreviewDeckCards,
} from "../components";
import PropTypes from "prop-types";
import {useAppHooks, mediaQueries, sizes} from "../customHooks/useAppHooks.js";
import {getUserDecks} from "../actions";
import {Alert} from "antd";
import {SvgSnapsOutline} from "../svgComponents";

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */
export const Dashboard = props => {
  const [selected, setSelected] = useState(0);
  
  const {
    pathname,
    changePath,
    dispatch,
    usersState,
    decksState,
    theme,
  } = useAppHooks("Dashboard");
  const search = e => {
    console.log(e.target.value);
  };
  
  useEffect(() => {
<<<<<<< HEAD
=======
    console.log("dispatching getUserDecks action ||");
>>>>>>> origin/actions-reducers-for-Decks
    dispatch(getUserDecks(usersState.user.uid));
    console.log('decksState from dashboard ||', decksState.decks);
    console.log('changePath from dashboard ||', changePath);
  }, []);
  
  const changeDeckSelected = deck => {
    setSelected(deck);
  };
  
  const deckClicked = (deck = undefined) => {
    console.log("Inside of deck clicked.");
    if(!deck){
      changePath("/create/deck");
      return;
    }
    changePath("/preview", {...deck});
  };
<<<<<<< HEAD

=======
  
  const getAlert = () => {
    if(decksState.errorDecksMessage){
      return (
        <Alert message={decksState.errorDecksMessage} type="warning" closable/>
      );
    }
    return "";
  };
  
>>>>>>> origin/actions-reducers-for-Decks
  return (
    <StyledDashboard className={"dashboard"}>
      {theme.screenWidth <= sizes.tablet && (
        <>
          <TitleText text={"Dashboard"}/>
          <SearchBar
            theme={theme}
            onSearch={search}
            style={{
              marginTop: "8px",
              marginBottom: "33px",
              width: "80%",
              marginLeft: "10%",
            }}
          />
        </>
      )}
<<<<<<< HEAD

      <StyledDeckHolder className={'deck-container'}>
        <PreviewDeckCards />
=======
      
      {getAlert()}
      <StyledDeckHolder className={"deck-container"}>
        <PreviewDeckCards
          border={"dashed"}
          icon={"plus"}
          onClick={e => deckClicked()}
        
        />
>>>>>>> origin/actions-reducers-for-Decks
        {decksState.decks.map(deck => {
          return (
            <PreviewDeckCards
              key={deck.deck_id}
              deck={deck}
<<<<<<< HEAD
=======
              border={"solid"}
>>>>>>> origin/actions-reducers-for-Decks
              onClick={e => deckClicked(deck)}
            />
          );
        })}
<<<<<<< HEAD
=======
      
>>>>>>> origin/actions-reducers-for-Decks
      </StyledDeckHolder>
    </StyledDashboard>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object,
};

const StyledDeckHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;

  @media screen and ${mediaQueries.tablet} {
    width: 100%;
    height: 100vh;
    position: absolute;
<<<<<<< HEAD
=======
    left: 0;
>>>>>>> origin/actions-reducers-for-Decks
  }
`;
