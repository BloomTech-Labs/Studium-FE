import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../images/synapsText.png';

const StyledSynapsText = props => {
  return ( <SynapsText>
    <img src={ Text }/>
  </SynapsText> );
};

StyledSynapsText.propTypes = {};

const SynapsText = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 85px;
line-height: 104.9%;
/* or 128px */
color: #231F20;
`;

export default StyledSynapsText;