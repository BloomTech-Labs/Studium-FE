import React from 'react';
import styled from 'styled-components';

const StyledCardText = ({text, highlighted}) => {
  return <StyledTitle highlighted={highlighted}>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: ${props => (props.highlighted ? '#4CB69F' : '#888888')};
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;

export default StyledCardText;
