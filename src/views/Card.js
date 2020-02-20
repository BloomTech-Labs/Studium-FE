import React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/Styled/StyledButton';
import StyledCard from '../components/Styled/StyledCard';


const Card = () => {
  return (
    <div>
      <h1>card view</h1>
    
      <StyledCard>
        <StyledCard
          styled={{ backgroundColor: 'red' }}
          type={''}
          icon={'add image'}
          text={''}
          hoverable={'true'}
        />
      </StyledCard>;

    </div>
  );
};

const tyledCard = styled.div`
  display: flex;
  max-width: 90%;
  justify-content: space-around;
  height: 90px;
`;


export default Card;
