import React, { useState } from 'react';
import styled from 'styled-components';
import card2 from '../../images/Card2.jpg';
import card3 from '../../images/Card3.jpg';
import { Card } from 'antd';
import PropTypes from 'prop-types';

/**
 * Big Flash Card Component
 * @param {FlashCard} flashCard
 * @returns {*}
 * @constructor
 */
const BigFlashCard = ({ flashCard }) => {
  const [position, setPosition] = useState('front');


  const flipCard = () => {

    const newPos = position === 'front' ? 'back' : 'front';
    setPosition(newPos);
  };

  return (
    <StyledCardContainer style={{ position: 'relative' }}>
      <StyledCard
        position={position}
        onClick={flipCard}
        style={{ width: '285px', height: '421.56px' }}
      >
        <CardText>
          {position === 'front' ? flashCard.question : flashCard.answer}
        </CardText>
      </StyledCard>
      <img
        src={card2}
        style={{
          position: 'absolute',
          top: '14px',
          height: '417px',
          width: '276px',
          zIndex: -1,
          left: '5px',
        }}
      />
      <img
        src={card3}
        style={{
          position: 'absolute',
          top: '22px',
          left: '7px',
          height: '417px',
          width: '260px',
          zIndex: -3,
        }}
      />
    </StyledCardContainer>
  );
};

BigFlashCard.prototypes = {
  flashCard: PropTypes.objectOf({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

const StyledCardContainer = styled.div`
  height: 390px;
  width: 283px;
  position: relative;
`;

const StyledCard = styled(Card)`
  && {
    margin: 121px auto 0 auto;
    background: ${props =>
      props.position === 'front' ? '#F7F7F7' : '#1b1414c9'};
    color: ${props => (props.position === 'front' ? '#1b1414c9' : 'white')};

    border-radius: 11px;
    > .ant-card-body {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  transition: all 1s;
`;
const CardText = styled.div`
  height: 100%;
  display: flex;
  justifycontent: center;
  font-size: 20px;
  font-weight: 900;
  transition: all 1s;
`;
export default BigFlashCard;
