import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {
  SmallFlashCard,
  TitleText,
  SearchBar,
  PreviewDeckCards,
} from "../components";
import PropTypes from "prop-types";
import {useAppHooks} from "../customHooks/useAppHooks.js";
import {getUserDecks} from "../actions";
import {Alert} from "antd";
import {SvgSnapsOutline} from "../svgComponents";
import {APP_VIEW_MOBILE, MEDIA_QUERIES, SIZES} from "../utilities/constants.js";

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */
export const Dashboard = props => {
  const [selected, setSelected] = useState(0);
  
  const {
    appView,
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
    console.log("dispatching getUserDecks action ||");
    dispatch(getUserDecks(usersState.user.uid));
  }, []);
  
  console.log("decksState from dashboard ||", decksState.decks);
  
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
  
  const getAlert = () => {
    if(decksState.errorDecksMessage){
      return (
        <Alert message={decksState.errorDecksMessage} type="warning" closable/>
      );
    }
    return "";
  };
  
  return (
    <StyledDashboard className={"dashboard"}>
      {appView === APP_VIEW_MOBILE &&
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
            height: "37px",
          }}
        />
      </>
      }
      
      {getAlert()}
      <StyledDeckHolder className={"deck-container"}>
        <PreviewDeckCards
          border={"dashed"}
          icon={"plus"}
          onClick={e => deckClicked()}
        />
        {decksState.decks.map(deck => {
          return (
            <PreviewDeckCards
              key={deck.deck_id}
              deck={deck}
              border={"solid"}
              onClick={e => deckClicked(deck)}
            />
          );
        })}
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
  max-width: 1140px;
  height: 100%;
  width: 100%;

  @media screen and ${MEDIA_QUERIES.tablet} {
    background: #FFFFFF;
    margin-top: 65px;
    border-radius: 10px;
  }
`;
