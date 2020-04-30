import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {PreviewDeckCards, SearchBar, TitleText,} from '../components';
import PropTypes from 'prop-types';
import {
  APP_VIEW_DESKTOP, APP_VIEW_MOBILE, MEDIA_QUERIES, THEME
} from '../utilities/constants.js';
import {getUserDecks} from '../actions';
import Fuse from 'fuse.js';

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  keys: [
    'deck_name',
  ]
};

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */
export const Dashboard = ({getHooks}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const {
    appView,
    changePath,
    dispatch,
    usersState,
    decksState,
    theme
  } = getHooks();
  const search = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {

    dispatch(getUserDecks(usersState.user.uid));
  }, []);

  const deckClicked = (deck = undefined) => {

    if (!deck) {
      changePath('/create/deck');
      return;
    }
    changePath('/preview', deck);

  };

  const getDecks = () => {

    if (decksState && decksState.decks) {
      const fuse = new Fuse(decksState.decks, options);
      if (searchTerm !== '') {

        const decks = fuse.search(searchTerm);
        console.log(decks);
        return decks;

      } else {
        return decksState.decks;
      }
    }
    return [];

  };
  const paddingBottom = window;
  console.log(paddingBottom);

  return (
    <StyledDashboard className={'dashboard'}>

      <Container>
        <TitleText color={'#36405C'}
                   text={appView === APP_VIEW_MOBILE ? 'Dashboard' : 'My' +
                     ' Flash Cards'}/>

        <SearchBar
          theme={theme}
          onChange={search}
          style={{
            marginTop: '8px',
            marginBottom: '33px',
            width: '80%',
            marginLeft: '10%',
            height: '37px',
          }}
        />
      </Container>


      <StyledDeckHolder className={'deck-container'}>
        <PreviewDeckCards
          border={'dashed'}
          getHooks={getHooks}
          onClick={e => deckClicked()}

        />
        {getDecks().map(deck => {
          if (deck['item']) {
            deck = deck['item'];
          }

          return (
            <PreviewDeckCards
              key={deck.deck_id}
              getHooks={getHooks}
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

const Selected = styled.p`
  color: ${props => props.selected === (true) ? '#14E59E' : '#000'};
  margin-right: 9%;
`;
const Container = styled.div`
display: flex;
flex-direction: ${props => {

  return props.theme.appView === APP_VIEW_DESKTOP ? 'row' :
    'column';
}
};

  /* width */
::-webkit-scrollbar {
display: none;
}

`;

const StyledDeckHolder = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: white;
  height: min-content;
  left: 10%;
`;
const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 250px;
  background: ${THEME.white};
  @media screen and ${MEDIA_QUERIES.tablet} {
    margin-top: 50px;
    border-radius: 10px;
    top: 11%;
    right: 13%;
  }
  

  
  > svg {
    height: 33px;
    width: 33px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  
  /* width */
::-webkit-scrollbar {
display: none;
}

`;

