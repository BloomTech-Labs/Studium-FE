import React, {useState} from 'react';
import styled from 'styled-components';
import {Card} from 'antd';
import PropTypes from 'prop-types';
import {darken} from 'polished';
import FlashCards from '../../svgComponents/FlashCards.js';
import {APP_VIEW_MOBILE} from '../../utilities/constants.js';

/**
 * Big Flash Card
 *
 * @component
 * @example
 * const flashCard = {question: "Question?", answer: "Answer"}
 * return (
 *  <BigFlashCard flashCard={flashCard} />
 *  )
 */
const BigFlashCard = ({flashCard, appView}) => {
  const [position, setPosition] = useState('front');
  
  const flipCard = () => {
    
    const newPos = position === 'front' ? 'back' : 'front';
    setPosition(newPos);
  };
  
  return (
    <StyledCardContainer data-testid="StyledCardContainer"
                         style={{position: 'relative'}} onClick={flipCard}>
      <StyledCard
        position={position}
        
        style={appView === APP_VIEW_MOBILE ?
          {width: '285px', height: '421.56px'} :
          {width: '352PX', height: '460px'}}
      >
        <CardText>
          {position === 'front' ? flashCard.question : flashCard.answer}
        </CardText>
      </StyledCard>
      <FlashCards appView={appView}/>
    </StyledCardContainer>
  
  );
};

BigFlashCard.prototypes = {
  flashCard: PropTypes.objectOf({
    question: PropTypes.string.isRequired, answer: PropTypes.string.isRequired,
  }).isRequired,
};

const StyledCardContainer = styled.div`
  height: 390px;
  width: 283px;
  position: relative;
`;

const StyledCard = styled(Card)`
  && {
    margin: 0px auto 0 auto;
    z-index: 2;
    background: ${props => props.position === 'front' ? '#FFFBF4' :
  darken(.1, '#4ea699')};
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
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  transition: all 1s;
`;
export default BigFlashCard;
