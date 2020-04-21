
import React, {useState} from 'react';

import React, {useState, useEffect} from 'react';

import styled from 'styled-components';
import {
  TitleText,
  SearchBar,
  PreviewDeckCards,
CreateCard,
} from '../components';
import SvgSynapsLogoText from '../svgComponents/SvgSynapsLogoText.js';
import PropTypes from 'prop-types';
import {useAppHooks} from '../customHooks/useAppHooks.js';
import {ReactComponent as Svg} from '../images/Group.svg';
import myPic from '../images/Group.png';
import {getUserDecks} from '../actions';
import {Alert} from 'antd';
import {SvgSnapsOutline} from '../svgComponents';
import {
  APP_VIEW_MOBILE,
  THEME,
  MEDIA_QUERIES,
  SIZES,
} from '../utilities/constants.js';
import theming from 'styled-theming';
import {useTheming} from '../customHooks/useTheming.js';
import {
  THEMING_VALUES,
  THEMING_VARIABLES,
} from '../customHooks/themingRules.js';

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
} from '../components';
import PropTypes from 'prop-types';
import {getUserDecks} from '../actions';
import {Alert} from 'antd';
import {APP_VIEW_MOBILE, MEDIA_QUERIES} from '../utilities/constants.js';


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
    theme,

    path,
    appView,
    height,
    getHooks,
  } = useAppHooks('Dashboard');
  const getValue = useTheming('App.js');

  } = getHooks();

  const search = e => {
    console.log(e.target.value);
  };

  const changeDeckSelected = deck => {
    setSelected(deck);
  };

  const deckClicked = (deck = undefined) => {
 if (!deck) {
      changePath('/create/deck');
      return;
    }
    changePath('/preview', {...deck});

    
    if(!deck){
      changePath('/create/deck');
      return;
    }
    changePath('/preview', deck);
  };
  
  const getAlert = () => {
    if(decksState.errorDecksMessage){
      return (
        <Alert message={decksState.errorDecksMessage} type="warning" closable/>
      );
    }
    return '';

  };

  return (
    <StyledDashboard className={'dashboard'}>

      <StyledTitleText>
        <TitleText
          text={'My Flashcards'}
          style={{
            left: '-20%',
            background: '#EEECE8',
            fontFamily: 'Source Sans Pro',
            fontStyle: 'normal',
            fontWeight: '900',
          }}
        />
      </StyledTitleText>
      <StyledSearchBar text={'search all cards'}>

      {appView === APP_VIEW_MOBILE &&
      <>
        <TitleText text={'Dashboard'}/>

        <SearchBar
          onSearch={search}
          text={'search all cards'}
          style={{

            position: 'absolute',
            width: '23%',
            height: '5%',
            left: '65%',
            top: '24px',
            border: '2px solid #343D58',
            boxSizing: 'border-box',
            borderRadius: '8px',
            marginTop: '8px',
            marginBottom: '33px',
          }}
        />
      </StyledSearchBar>
      <StyledDeckHolder>
        <StyledCard
          text={'Create Deck'}
          onClick={() => deckClicked()}
          style={{
            width: '177px',
            height: '231px',
          }}
        />

        {decks.map(deck => {

            marginTop: '8px',
            marginBottom: '33px',
            width: '80%',
            marginLeft: '10%',
            height: '37px',
          }}
        />
      </>
      }
      
      {getAlert()}
      
      <StyledDeckHolder className={'deck-container'}>
        <PreviewDeckCards
          border={'dashed'}
          getHooks={getHooks}
          onClick={e => deckClicked()}
        
        />
        {decksState.decks && decksState.decks.map(deck => {

          return (
            <StyledCard
              key={deck.deck_id}
              getHooks={getHooks}
              deck={deck}


              border={'solid'}

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

const StyledDeckHolder = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: -5% 11% 12%;
  justify-content: space-around;
  background: white;
  height: 100%;
  left: 10%;
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: ${THEME.white};

  @media screen and ${MEDIA_QUERIES.tablet} {
    height: 100vh;
    position: absolute;
    left: 17%;
    top: 11%;
    right: 13%;
  }

  @media screen and ${MEDIA_QUERIES.desktop} {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 200px;
    background-image: url(../images/Group.svg);
    background-color: ${THEME.primaryColor36405C};
  }
  > svg {
    height: 33px;
    width: 33px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

const StyledSearchBar = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 65px 13%;
  background: white;
`;

const StyledTitleText = styled.div`
left: -20%;
fontFamily: Source Sans Pro,
fontStyle: normal,
fontWeight: 900,
fontSize: 47px,
lineHeight: 24px,
margin-top: 53px; 
text-color: #36405C;
`;

const Wrap = styled.div`
  background: ${myPic};
  max-width: 1140px;
  width: 100%;
  background: #FFFFFF;
  padding-bottom: 200px;
  @media screen and ${MEDIA_QUERIES.tablet} {

    background: #ffffff;


    margin-top: 65px;
    border-radius: 10px;
  }
`;

const StyledCard = styled(PreviewDeckCards)`
  @media screen and ${MEDIA_QUERIES.tablet} {
    height: 231px;
    width: 177px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    color: #5c6078;
  }
`;
