import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {
  SmallFlashCard,
  TitleText,
  SearchBar,
  PreviewDeckCards,
} from '../components';
import PropTypes from 'prop-types';
import {useAppHooks, mediaQueries, sizes} from '../customHooks/useAppHooks.js';
import {getUserDecks} from '../actions';
import {Alert} from 'antd';

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
  } = useAppHooks();
  const search = e => {
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getUserDecks(usersState.user.uid));
    console.log('decksState from dashboard ||', decksState.decks);
    console.log('changePath from dashboard ||', changePath);
  }, []);

  const changeDeckSelected = deck => {
    setSelected(deck);
  };

  const deckClicked = (deck = undefined) => {
    if (!deck) {
      changePath('/create/deck');
      return;
    }
    changePath('/preview', {...deck});
  };

  return (
    <StyledDashboard className={'dashboard'}>
      {theme.screenWidth <= sizes.tablet && (
        <>
          <TitleText text={'Dashboard'} />
          <SearchBar
            theme={theme}
            onSearch={search}
            style={{
              marginTop: '8px',
              marginBottom: '33px',
              width: '80%',
              marginLeft: '10%',
            }}
          />
        </>
      )}

      <StyledDeckHolder className={'deck-container'}>
        <PreviewDeckCards />
        {decksState.decks.map(deck => {
          return (
            <PreviewDeckCards
              key={deck.deck_id}
              deck={deck}
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
  width: 100%;

  @media screen and ${mediaQueries.tablet} {
    width: 100%;
    height: 100vh;
    position: absolute;
  }
`;
