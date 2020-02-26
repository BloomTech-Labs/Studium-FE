import React from 'react';
import styled from 'styled-components';

const StyledTitleText = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: #888888;
  font-weight: bold;
  font-size: 45px;
  margin-left: 10%;
  margin-top: 24px;
  text-align: left;
  margin-botom: 36px;
`;

export default StyledTitleText;
