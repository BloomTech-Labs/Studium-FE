import React from 'react';
import styled from 'styled-components';
import Text from '../../images/synapsText.png';

export const SynapsText = props => {
  return ( <TextDiv>
    <img src={ Text } alt={"synaps"}/>
  </TextDiv> );
};

SynapsText.propTypes = {};

const TextDiv = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 85px;
  line-height: 104.9%;
  /* or 128px */
  color: #231f20;
`;

