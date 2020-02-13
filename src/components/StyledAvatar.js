import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAvatar = props => {
  return ( <StyledAntAvatar icon={ 'user' }>
  
  </StyledAntAvatar> );
};

const StyledAntAvatar = styled( Avatar )`
  && {
    background-color: ${ props => props.theme.darkGray };
  }
`;

StyledAvatar.propTypes = {};

export default StyledAvatar;