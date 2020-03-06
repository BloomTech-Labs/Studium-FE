import React, { useState } from 'react';
import styled from 'styled-components';
import StyledCardDeck from '../components/Styled/StyledCardDeck';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledSearchBar from '../components/Styled/StyledSearchBar';
import PropTypes from 'prop-types';
import { devices } from '../utilities/breakpoints-device.js';
import {useDispatch, useEffect} from 'react-redux'; 

//import {} from '../actions/...'

//make sure to import actions

const decks = [
  { deck_name: 'Some Name', deck_id: 1 },
  { deck_name: 'Another Name', deck_id: 1 },
  { deck_name: 'Anatomy', deck_id: 1 },
  { deck_name: 'Some Name', deck_id: 1 },
  {
    deck_name: 'Another' + ' Name',
    deck_id: 1,
  },
  {
    deck_name:
      'Anatomy this is a really long deck name lets just keep' + ' this name',
    deck_id: 1,
  },
];

const Dashboard = props => {
  const [selected, setSelected] = useState(0);

  const search = e => {
    console.log(e.target.value);
  };

  const changeDeckSelected = deck => {
    setSelected(deck);
  };

  const deckClicked = (deck = undefined) => {
    if (!deck) {
      props.history.push('/create/deck');
      return;
    }
    props.history.push('/game', { ...deck });
  };

  return (
    <StyledDashboard className={'dashboard'}>
      <StyledTitleText text={'Dashboard'} />
      <StyledSearchBar
        onSearch={search}
        style={{
          marginTop: '8px',
          marginBottom: '33px',
          width: '80%',
          marginLeft: '10%',
        }}
      />
      <StyledDeckHolder>
        <StyledCardDeck
          border={'dashed'}
          icon={'plus'}
          onClick={() => deckClicked()}
        />
        {decks.map(deck => {
          return (
            <StyledCardDeck
              id={deck.deck_id}
              deck={deck}
              border={'solid'}
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
  max-width: 100%;
  height: 100%;

  @media screen and ${devices.tablet} {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 400px;
  }
`;

export default Dashboard;
