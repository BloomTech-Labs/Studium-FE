import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import theming from 'styled-theming';
import {getAllCardsForDeck, deleteCard} from '../actions/cardActions.js';
import {
  TitleText, PreviewDeckCards, SearchBar, SynapsButton,
} from '../components';
import {APP_PATHS, THEME, APP_VIEW_MOBILE} from '../utilities/constants.js';
import {Alert, Icon} from 'antd';
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from '../customHooks/themingRules.js';
import { ReactComponent as Delete} from "../svgs/delete.svg"

/**
 * Preview Deck
 * @category Views
 * @component
 * @example return (<PreviewDeck />);
 */
export const PreviewDeck = ({getHooks}) => {
  // @type CardState
  const {cardsState, pathPushedState, dispatch, usersState, changePath} = getHooks(
    'PreviewDeck');
  
  const [cardsSelected, setCardsSelected] = useState({});
  const [selectMode, setSelectMode] = useState(false);
  
  useEffect(() => {
    
    if(pathPushedState === undefined){
    
    }else{
      dispatch(
        getAllCardsForDeck(pathPushedState.deck_id, usersState.user.uid));
    }
    
  }, [pathPushedState]);
  
  const cardClicked = (card) => {
    if(!selectMode){
      return;
    }
    if(!!cardsSelected[card.card_id]){
      delete cardsSelected[card.card_id];
      setCardsSelected({...cardsSelected});
    }else{
      setCardsSelected({...cardsSelected, [card.card_id]: card});
    }
  };
  const deleteButton = (cardIds) => {
    if(!selectMode){
      return;
    } if(cardsSelected.length > 0) {
      cardsSelected.forEach(cardId => {
        const cardToDelete = cardsState.cards.filter(card => {
          return card.card_id === cardId ? true : false;
        })[0];
        dispatch(deleteCard(cardToDelete, usersState.user.uid))
      })
    }
  }
  
  const unSelected = () => {
    if(selectMode){
      setCardsSelected([]);
    }
    setSelectMode(!selectMode);
  }

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
    <StyledPreviewDeck data-testid={'preview-deck-container'}>
      {getAlert()}
      <TopContainer>
        <StyledIconLeft type="left"/>
        <p onClick={() => changePath(APP_PATHS.DASHBOARD_PATH)}>Back</p>
        <SearchContainer>
          <SearchBar height={'23px'} borderRadius={'14px'}
                     onSearch={() => {
                     }}/>
        </SearchContainer>
        <Selected selected = {selectMode} onClick={unSelected}>
            {selectMode === (false) ? "Select" : "Cancel" }
        </Selected>
      </TopContainer>
      <TitleText
        text={(pathPushedState && pathPushedState.deck_name) || 'Preview'}
      />
      <StyledPreviewDeckHolder>
        <PreviewDeckCards cardType={'card'} key={0}
                          getHooks={getHooks}
        />
        {Object.values(cardsState.cards).filter(card =>
          card.deck_id === pathPushedState.deck_id).map(
          card => {
            return <PreviewDeckCards onClick={() => cardClicked(card)}
                                    getHooks={getHooks} cardType={'card'}
                                    key={card.card_id}
                                    selected={!!cardsSelected[card.card_id]}
                                    card={card}/>;
          })}
      
      </StyledPreviewDeckHolder>
      <StudyButton
        onClick={() => changePath(APP_PATHS.QUIZ_MODE, pathPushedState)}
        height={'73px'} width={'90%'} text={'Study Deck'}
        type={'secondary'}/>
        <DeleteIcon/>
    </StyledPreviewDeck>
  );
  
};

const Selected = styled.p`
  color: ${props => props.selected === (true) ? '#14E59E' : "#000"};
  margin-right: 9%;
`
const DeleteIcon = styled(Delete)`
  ${props => props.theme.appView === APP_VIEW_MOBILE ? "position:absolute" : ""};
  ${props => {
    if (props.theme.appView === APP_VIEW_MOBILE){
      return "bottom: 5px; right: 5px;"
  }}}
`

const Blur = styled.div`
position: absolute;
top: -80px;
min-width: 100vw;
height: 80px;
background-image: linear-gradient(transparent, #ffffff8c);
`;

const StudyButton = styled(SynapsButton)`
box-sizing: border-box;
align-self: center;
border-radius: 5px;
margin-top: 20px;
margin-bottom: 20px;
  > span {
  margin-bottom: 20px;
  margin-top:15px;
  font-weight: bold;
  color: white;
  font-size:32px;
  }
`;

const TopContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 12px;
width: 100vw;
justify-content: center;
align-items: center;
margin-top: 15px;
`;

const StyledIconLeft = styled(Icon)`
margin-right: 9%;
`;

const SearchContainer = styled.div`
max-width: 50%;
margin: 0 auto;
`;

const previewDeckHeight = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.VISIBLE]: window.innerHeight - THEME.navBarTopHeight + 'px',
  [THEMING_VALUES.HIDDEN]: window.innerHeight - THEME.navBarTopHeight - 95 +
  'px',
});

const marginBottom = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.VISIBLE]: THEME.footerHeight + 20 + 'px',
  [THEMING_VALUES.HIDDEN]: '10px',
});

const StyledPreviewDeck = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  max-height: ${previewDeckHeight};
  width: 100%;
  border-radius: 10px;
  padding-bottom: ${marginBottom};
  background: ${props => props.theme.themeState.navBarLight};
`;

const StyledPreviewDeckHolder = styled.div`
overflow-y: scroll;
  max-height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: scroll;
  padding-bottom: 150px;
  // background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`;
