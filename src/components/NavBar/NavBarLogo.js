import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SvgContainer } from '../SvgContainer/SvgContainer.js';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { ReactComponent as GreenCircle } from '../../svgs/SynapsFavicon.svg';
import { ReactComponent as Brain } from '../../images/brainpic.svg';
import Logo from '../../images/brainpic.svg';
import {
  useAppHooks, sizes, mediaQueries,
} from '../../customHooks/useAppHooks.js';

/**
 *   NavBarLogo
 *
 *  @component
 *
 */
const NavBarLogo = ( props ) => {
  const { theme, pathname } = useAppHooks();
  
  let synapsColor = '#36405C';
  let backgroundColor = '#F6F5F3';
  
  if( pathname === '/signin' || pathname === '/preview' || pathname ===
    '/game' ){
    synapsColor = 'white';
    backgroundColor = theme.primaryColor;
  }
  
  if( theme.screenWidth > sizes.tablet ){
    return (
      <LogoContainer id={ 'logo-container' }>
        <StyledBrain data-testid={ 'big-brain' } id={ 'brain' } width={ '400' }
                     viewBox={ '0 0 0 0' } fill={ 'black' }
                     overflow={ 'visible' } backgroundColor={ 'blue' }
                     color={ 'green' }>
        
        </StyledBrain>
        <SvgContainer
          svg={ GreenCircle }
          position={ 'absolute' }
          top={ 0 }
          left={ 0 }
          strokeWidth={ '5px' }
          strokeColor={ 'yellow' }
          backgroundColor={ 'transparent' }
          width={ '35px' }
          height={ '35px' }
        />
        <SvgContainer
          svg={ SmallWhiteLogo }
          position={ 'absolute' }
          top={ '13px' }
          left={ '60px' }
          color={ synapsColor }
          backgroundColor={ backgroundColor }
          width={ '90px' }
          height={ '30px' }
        />
      </LogoContainer>
    );
  }else{
    return (
      <LogoContainer>
        <BrainLogo svg={ Brain } view-box={ ' 0 0 2000 2000' }/>
        <SvgContainer
          svg={ SmallWhiteLogo }
          position={ 'absolute' }
          top={ '50%' }
          left={ '13%' }
          color={ '#F6F5F3' }
          backgroundColor={ 'transparent' }
          width={ '90px' }
          height={ '30px' }
        />
      </LogoContainer>
    );
  }
};
const StyledBrain = styled( SmallWhiteLogo )`
&{
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid red;
  overflow: visible;
  transform: translate(-50%, -50%);
  
  fill: ${ props => props.color };
  
  svg:not(:root){
    overflow: visible;
  }
  path[Attributes Style]{
    fill: "green:;
  }
  
   svg {
    overflow: visible;
  }
  
   *::before, *::after, * {
    fill: ${ props => props.color };
  }
  
   path, g, d {
    fill: ${ props => props.color };
    }
}

z-index: ${ props => props.zIndex || 5 };
background: ${ ( { backgroundColor, theme } ) => backgroundColor ||
  theme.white };

> *::before, *::after, * {
    z-index: ${ props => props.zIndex || 5 };
    opacity: ${ props => props.opacity || 1 };
    fill: ${ props => props.color };
    }
> g {
    z-index: ${ props => props.zIndex || 5 };
    stroke: ${ props => props.strokeColor };
    stroke-width: ${ props => props.strokeWidth || ' 1px' };
  }

`;

const BrainLogo = styled( SvgContainer )`
&&{
  , #positional-container {
    position: absolute;
    transform: rotateY(180deg);
    border: 4px solid green;
    width: 100%%;
    height: 100%;
    z-index: 50;
    border: 4px solid red;
    overflow: visible;
    background-size: cover;
    > svg {
      width: 100%;
      height: 100%;
    }
  }
}
`;

const LogoContainer = styled.div`
position: absolute;
display: flex;
overflow: visible;
height: 100vh;
width: 100vw;

@media screen and ${ props => mediaQueries.tablet } {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
  }

`;

NavBarLogo.propTypes = {};

export default NavBarLogo;