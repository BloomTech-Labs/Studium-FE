import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SmallFlashCard, TitleText, SearchBar } from '../components';
import PropTypes from 'prop-types';
import {
  useAppHooks, mediaQueries, sizes,
} from '../customHooks/useAppHooks.js';
import { getUserDecks } from '../actions';
import { Alert } from 'antd';

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */
export const Dashboard = props => {
  const [ selected, setSelected ] = useState( 0 );
  const { pathname, changePath, dispatch, usersState, decksState, theme } = useAppHooks();
  const search = e => {
    console.log( e.target.value );
  };
  
  useEffect( () => {
    dispatch( getUserDecks( usersState.user.uid ) );
  }, [] );
  
  const changeDeckSelected = deck => {
    setSelected( deck );
  };
  
  const deckClicked = ( deck = undefined ) => {
    if( !deck ){
      changePath( '/create/deck' );
      return;
    }
    changePath( '/preview', { ...deck } );
  };
  
  const getAlert = () => {
    if( decksState.errorDecksMessage ){
      return <Alert
        message={ decksState.errorDecksMessage }
        type="warning"
        closable
      />;
    }
    return '';
  };
  
  return ( <StyledDashboard className={ 'dashboard' }>
    { theme.screenWidth <= sizes.tablet &&
    <>
      <TitleText text={ 'Dashboard' }/>
      <SearchBar
        theme={ theme }
        onSearch={ search }
        style={ {
          marginTop: '8px',
          marginBottom: '33px',
          width: '80%',
          marginLeft: '10%',
        } }
      />
    </>
    }
    
    { getAlert() }
    <StyledDeckHolder className={ 'deck-container' }>
      
      { theme.screenWidth > sizes.tablet &&
      <DesktopTopDash className={ 'dash-top' }>
        <DashboardTopLeft className={ 'dash-top-left' }>
          <TitleText color={ '#36405C' } text={ 'My Flash Cards' }/>
        </DashboardTopLeft>
        
        
        <DashboardTopRight>
          <SearchBar onSearch={ () => {
          } }/>
        </DashboardTopRight>
      
      
      </DesktopTopDash>
      }
      <FlashCards>
        <SmallFlashCard
          border={ 'dashed' }
          icon={ 'plus' }
          onClick={ () => deckClicked() }
        />
        { decksState.decks.map( deck => {
          return ( <SmallFlashCard
            key={ deck.deck_id }
            deck={ deck }
            border={ 'solid' }
            onClick={ e => deckClicked( deck ) }
          /> );
        } ) }
      </FlashCards>
    </StyledDeckHolder>
  </StyledDashboard> );
};

Dashboard.propTypes = {
  history: PropTypes.object,
};

const FlashCards = styled.div`
margin-top: 4rem;
display: flex;
width: 100%;
height: 100%;
justify-content: space-around;
align-self: flex-start;
`;

const DesktopTopDash = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DashboardTopLeft = styled.div`
  margin-top: 2%;
  margin-left: 6%;
  display: flex;
  width: 60%;
`;

const DashboardTopRight = styled.div`
  margin-top: 2%;
  margin-right: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 40%;
  height: 175px;
  padding: 10px;
  
  > .ant-input-search {
    width: 300px;
    margin-top: 2rem;
    > .ant-input {
        @media screen and ${ mediaQueries.tablet } {
          border: 2px solid #36405C;
          border-radius: 14px;
          height: 30px;
        }
  }
  }
`;

const StyledDeckHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
  
  @media screen and ${ mediaQueries.tablet } {
    width: 100%;
    max-width: 1140px;
    height: 100%;
    max-height: 1063px;
    margin: 0 auto 0 auto;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    
  }
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;

  @media screen and ${ mediaQueries.tablet } {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 400px;
  }
`;

