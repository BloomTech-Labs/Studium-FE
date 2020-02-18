import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import CardDeck from '../components/MainDashboard/CardDeck';
import StyledCardDeck from '../components/Styled/StyledCardDeck';

const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
    <StyledDashboard>
      <StyledCardDeck
        styled={{ backgroundColor: 'red' }}
        type={'primary'}
        icon={'plus'}
        text={'Create Cards'}
        hoverable={'true'}
      />
      <StyledCardDeck type={'white'} 
      border={'solid'} 
      />
      {/* <CardDeck />  */}
      <StyledCardDeck 
        border={'dashed'} 
        type={'white'} 
        />
  
    </StyledDashboard>
        <Footer />

    </div>
  );
};

const StyledDashboard = styled.div`
  display: flex;  
  max-width: 90%;
  justify-content: space-around;
  height: 90vh;
`;

export default Dashboard;
