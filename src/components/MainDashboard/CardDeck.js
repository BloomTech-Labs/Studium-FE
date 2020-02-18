import React from 'react';
import StyledButton from '../../components/Styled/StyledButton';
import styled from 'styled-components';

export default function CardDeck() {
  return (
    <StyledDashCard>
      {/* <StyledCard> */}
      <StyledButton
        style={{
          width: '94px',
          height: '94px',
          left: '24px',
          top: '240px',
          padding: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'          
        }}
        icon={'plus'}
        text={'Create Cards'}
        size={'large'}
      />
      {/* </StyledCard> */}

      <StyledButton
      style={{
          width: '94px',
          height: '94px',
          left: '24px',
          top: '240px',
          padding: '0 auto',
        }}
        border={'dashed'}
        type={'white'}
        size={'large'}
      />
      <StyledButton
      style={{
          width: '94px',
          height: '94px',
          left: '24px',
          top: '240px',
          padding: '0 auto',
        }}
        type={'primary'}
        //type={'white'}
        size={'large'}
      />
      {/* // </StyledCard> */}
    </StyledDashCard>
  );
}

const StyledDashCard = styled.div`
  display: flex;
  max-width: 90%;
  justify-content: space-around;
  height: 90vh;
`;
const StyledCard = styled.div`  
    /* background: red; */
`;
