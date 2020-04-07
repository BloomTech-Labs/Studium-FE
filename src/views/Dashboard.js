import React, {useState} from 'react';
import styled from 'styled-components';
import {SmallFlashCard, TitleText, SearchBar, PreviewDeckCards } from '../components';
import PropTypes from 'prop-types';
import {devices} from '../utilities/breakpoints-device.js';
import {useAppHooks} from '../customHooks/useAppHooks.js';
import {ReactComponent as Svg} from '../images/Group.svg';
import {CreateButton} from '../components/Button/CreateButton';
import myPic from '../images/Group.png';
import {ReactComponent as SynapsBrainImage} from '../images/Frame.svg';
import {getUserDecks} from "../actions";
import {Alert} from "antd";
import {SvgSnapsOutline} from "../svgComponents";
import {APP_VIEW_MOBILE, MEDIA_QUERIES, SIZES} from "../utilities/constants.js";

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
export const Dashboard = props => {
  const [selected, setSelected] = useState(0);
  const {pathname, changePath} = useAppHooks();
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
  };

  return (
    // <SynapsBrainImage
    //   style={{
    //     backgroundColor: '#EEECE8',
    //   }}
    // >
    <StyledDashboard className={'dashboard'}>
      {/* <Svg
        style={{
          position: 'absolute',
          left: '0.04%',
          right: '0.1',
          top: '-0.2%',
          bottom: '0%',
          mixBlendMode: 'color-burn',
          //backgroundColor: '#EEECE8',
          //opacity: '0.1',
        }}
      > */}
      <StyledTitleText>
        <TitleText
          text={'My Flashcards'}
          style={{
            left: '-20%',
            background: '#EEECE8',
            fontFamily: 'Source Sans Pro',
            fontStyle: 'normal',
            fontWeight: '900',
            fontSize: '47px',
            lineHeight: '24px',
            marginTop: '53px',
          }}
        />
      </StyledTitleText>
      <StyledSearchBar>
        <SearchBar
          onSearch={search}
          style={{
            position: 'absolute',
            width: '237px',
            height: '35px',
            left: '584px',
            top: '24px',
            border: '2px solid #343D58',
            boxSizing: 'border-box',
            borderRadius: '14px',
            marginTop: '8px',
            marginBottom: '33px',
          }}
        />
      </StyledSearchBar>
      <StyledDeckHolder>
        <SmallFlashCard
          text={'Create Deck'}
          icon={'plus'}
          onClick={() => deckClicked()}
          style={{
            width: '126px',
            height: '164px',
            background: '#EEECE8',
            borderRadius: '10px',
            border: '2px dashed #D7EEE7',
          }}
        />
        {/* <CreateButton
      text = {'Create Deck'}
      style = {{
        left: '-22%',
        top: '8%',
      }}
      /> */}

        {decks.map(deck => {
          return (
            <SmallFlashCard
              key={deck.deck_id}
              deck={deck}
              onClick={e => deckClicked(deck)}
              style={{
                width: '126px',
                height: '164px',
                background: '#EEECE8',
                borderRadius: '10px',
                border: '2px dashed #D7EEE7',
              }}
            />
          );
        })}
      </StyledDeckHolder>
    </StyledDashboard>
    //</SynapsBrainImage>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object,
};

const StyledDeckHolder = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: -65px 15% 12%;
  justify-content: space-around;
  background: white;
  height: 1063px;
  left: 10%;
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
  height: 100%;
  overflow-y: scroll;
  background: white;

  @media screen and ${devices.tablet} {
    height: 100vh;
    position: absolute;
    left: 262px;
    top: 11%;
    right: 13%;
  }

  @media screen and ${devices.desktop} {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 200px;
    background-image: url(../images/Group.svg);
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
  height: 100%;
  width: 100%;

  @media screen and ${MEDIA_QUERIES.tablet} {
    background: #FFFFFF;
    margin-top: 65px;
    border-radius: 10px;
  }
`;
