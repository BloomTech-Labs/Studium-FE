import React from 'react';
import styled from 'styled-components';

const StyledCardText = ({text}) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: #888888;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;

export default StyledCardText;
