import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import StyledCardDeck from '../components/Styled/StyledCardDeck';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledSearchBar from '../components/Styled/StyledSearchBar';
import StyledCreateCardBtn from '../components/Styled/StyledCreateCardBtn';

const decks = [
  { deck_name: 'Some Name' }, { deck_name: 'Another Name' },
  { deck_name: 'Anatomy' }, { deck_name: 'Some Name' }, {
    deck_name: 'Another' + ' Name',
  }, {
    deck_name: 'Anatomy this is a really long deck name lets just keep' +
      ' this name',
  },
];

const Dashboard = () => {
  
  const [ selected, setSelected ] = useState( 0 );
  
  const search = ( e ) => {
    console.log( e.target.value );
  };
  
  const changeDeckSelected = ( deck ) => {
    setSelected( deck );
  };
  
  return ( <StyledDashboard>
    <StyledTitleText text={ 'Dashboard' }/>
    <StyledSearchBar onSearch={ search }
                     style={ {
                       marginTop: '8px',
                       marginBottom: '33px',
                       width: '80%',
                       marginLeft: '10%',
                     } }/>
    <StyledDeckHolder>
      { decks.map( deck => {
        return <StyledCardDeck deck={ deck } border={ 'solid' }/>;
      } ) }
      <StyledCardDeck border={ 'dashed' } icon={ 'plus' }/>
    </StyledDeckHolder>
    <StyledCreateCardBtn 
    icon={'plus'}
    size={'large'}
    >

    </StyledCreateCardBtn>
    <Footer/>
  </StyledDashboard> );
};

const StyledDeckHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin:  0 auto;
  justify-content: space-around;
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 90%;
`;

export default Dashboard;
