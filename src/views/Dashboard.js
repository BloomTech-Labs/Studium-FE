import React, {useEffect} from 'react';
import styled from 'styled-components';
import {PreviewDeckCards, SearchBar, TitleText,} from '../components';
import PropTypes from 'prop-types';
import {
  APP_VIEW_DESKTOP, APP_VIEW_MOBILE, MEDIA_QUERIES, THEME
} from '../utilities/constants.js';
import {getUserDecks} from '../actions';
import {Alert} from 'antd';

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */
export const Dashboard = ({getHooks}) => {

  const {
    appView,
    changePath,
    dispatch,
    usersState,
    decksState,
    theme
  } = getHooks();
  const search = e => {

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

  const getAlert = () => {
    if (decksState.errorDecksMessage) {
      return (
        <Alert message={decksState.errorDecksMessage} type="warning" closable/>
      );
    }
    return '';
  };

  return (
    <StyledDashboard className={'dashboard'}>
      {getAlert()}
      <Container>
        <TitleText color={'#36405C'}
                   text={appView === APP_VIEW_MOBILE ? 'Dashboard' : 'My' +
                     ' Flash Cards'}/>

        <SearchBar
          theme={theme}
          onSearch={search}
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
        {decksState.decks && decksState.decks.map(deck => {
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

`;

const StyledDeckHolder = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: white;
  height: 100%;
  left: 10%;
`;
const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 500px;
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

