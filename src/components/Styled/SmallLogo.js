import React from 'react';
import styled from 'styled-components';
import logo from '../../images/smalllogo.png';

const SmallLogo = () => {
  return ( <StyledSmallLogo>
      <img src={ logo } alt="Logo"></img>
    </StyledSmallLogo> );
};

const StyledSmallLogo = styled.div`
margin: 121px auto 0 auto; 


`;
export default SmallLogo; 