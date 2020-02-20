import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import StyledCardDeck from '../components/Styled/StyledCardDeck';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledSearchBar from '../components/Styled/StyledSearchBar';

const Dashboard = () => {
  
  const search = ( e ) => {
    console.log( e.target.value );
  };
  
  return ( <div>
    <StyledTitleText text={ 'Dashboard' }/>
    <StyledSearchBar onSearch={ search }
                     style={ {
                       marginTop: '8px', marginBottom: '33px', width: '90%',
                     } }/>
    <StyledDashboard>
      
      <StyledCardDeck
        styled={ { backgroundColor: 'red' } }
        type={ 'primary' }
        icon={ 'plus' }
        text={ 'Create Cards' }
        hoverable={ 'true' }
      />
      <StyledCardDeck type={ 'white' } border={ 'solid' }/>
      <StyledCardDeck border={ 'dashed' } type={ 'white' }/>
    </StyledDashboard>
    <Footer/>
  </div> );
};

const StyledDashboard = styled.div`
  display: flex;
  max-width: 90%;
  justify-content: space-around;
  height: 90vh;
  
`;

export default Dashboard;
