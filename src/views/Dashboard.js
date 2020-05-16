import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {PreviewDeckCards, SearchBar, TitleText} from '../components';
import PropTypes from 'prop-types';

import {useAppHooks} from '../customHooks/useAppHooks.js';
import myPic from '../images/Group.png';
import {MEDIA_QUERIES, THEME} from '../utilities/constants.js';
import {useTheming} from '../customHooks/useTheming.js';

const decks = [
  {deck_name: 'Some Name', deck_id: 1},
  {deck_name: 'Another Name', deck_id: 2},
  {deck_name: 'Anatomy', deck_id: 3},
  {deck_name: 'Some Name', deck_id: 4},
  {
    deck_name: 'Another' + ' Name',
    deck_id: 5,
  },
  {
    deck_name:
      'Anatomy this is a really long deck name lets just keep' + ' this name',
    deck_id: 6,
  },
  {
    deck_name: 'Another one',
    deck_id: 6,
  },
  {
    deck_name: 'One more',
    deck_id: 6,
  },
  {
    deck_name:
      'Anatomy this is a really long deck name lets just keep' + ' this name',
    deck_id: 6,
  },
  {
    deck_name: 'Testing Another One',
    deck_id: 6,
  },
  {
    deck_name:
      'Anatomy this is a really long deck name lets just keep' + ' this name',
    deck_id: 6,
  },
];

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

      </StyledSearchBar>
      <StyledDeckHolder>
        <PreviewDeckCards
          text={'Create Deck'}
          getHooks={props.getHooks}
          onClick={() => deckClicked()}
          style={{
            width: '167px',
            height: '221px',
          }}

        />
        {getDecks().map(deck => {
          if (deck['item']) {
            deck = deck['item'];
          }

          return (

            <StyledCard
              key={deck.deck_id}
              deck={deck}
              getHooks={getHooks}
              onClick={e => deckClicked(deck)}
              style={{
                width: '167px',
                height: '221px',
              }}

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

