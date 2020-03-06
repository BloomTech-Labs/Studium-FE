import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const CardIcon = ({ cardNumber, width, height, border }) => {
  return (
    <StyledCardIconContainer width={width} height={height} border={border}>
      <StyledStackedCardIconTwo width={width} height={height} border={border} />
      <StyledStackedCardIcon width={width} height={height} border={border} />
      <StyledCardIcon width={width} height={height} border={border} />
      <CardIconText>{cardNumber && cardNumber}</CardIconText>
    </StyledCardIconContainer>
  );
};

CardIcon.propTypes = {
  cardNumber: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  white: PropTypes.number,
  border: PropTypes.string,
};

const StyledCardIconContainer = styled.div`
  margin-top: 4rem;
  position: relative;
  width: ${props => (props.width ? props.width : '80px')};
  height: ${props => (props.height ? props.height : '108px')};
`;

const StyledCardIcon = styled.div`
  position: absolute;
  display: flex;
  width: ${props => (props.width ? props.width : '80px')};
  height: ${props => (props.height ? props.height : '108px')};
  left: 0;
  bottom: 0;
  background: #c4c4c4;
  border: ${props => (props.border ? props.border : '3px solid white')};
`;

const StyledStackedCardIcon = styled(StyledCardIcon)`
  left: 20%;
  bottom: 15%;
`;
const StyledStackedCardIconTwo = styled(StyledCardIcon)`
  left: 40%;
  bottom: 30%;
`;

const CardIconText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Fredoka One;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
