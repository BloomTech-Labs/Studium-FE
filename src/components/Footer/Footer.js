import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { ContainerDiv } from '../Container/ContainerDiv.js';
import PropTypes from 'prop-types';
import { useAppHooks } from '../../customHooks/useAppHooks.js';

/**
 * Footer
 * @component
 * @example return (<Footer />)
 *
 */
export const Footer = ( props ) => {
  
  const { changePath, theme, pathname } = useAppHooks();
  
  /**
   * Add Deck
   * @description Function called to add a deck to the users decks.
   * @function
   * @name addDeck
   */
  const addDeck = () => {
    changePath( '/create/deck' );
    
  };
  
  return ( <StyledFooter { ...props } theme={ theme } className={ 'footer' }
                         pathname={ pathname }>
    { pathname === './preview' && <Blur/> }
    <ContainerDiv
      className={ 'footer-container' }
      maxHeight={ '50px' }
      style={ {
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      } }
      overFlowY={ 'visible' }
      flexDirection={ 'row' }
    >
      
      <StyledIcon
        type="edit"
        color={ props.theme ? props.theme.gray939598 : 'gray' }
      />
      <StyledIcon
        type="delete"
        color={ props.theme ? props.theme.grayD1D3D4 : 'gray' }
      />
    </ContainerDiv>
  </StyledFooter> );
};

Footer.prototypes = {
  navBarVis: PropTypes.bool,
};

const Blur = styled.div`
position: absolute;
top: -80px;
min-width: 100vw;
height: 80px;
position: absolute;
background-image: linear-gradient(transparent, #ffffff8c);
`;

const StyledFooter = styled.div`
  position: absolute;
  bottom: ${ props => {
  if( props.pathname === '/preview' || props.pathname === '/dashboard' ){
    return '0';
  }else if( props.pathname === '/create/deck' ){
    return '-75px';
  }
  return '-75px';
}
};
  margin-top: auto;
  min-width: 100vw;
  height: 50px;
  background: #E1DED7;
  align-items: center;
  @media screen and ${ props => props.theme.devices.tablet } {
  display: none;
    };
`;

const StyledIcon = styled( Icon )`
  && {
    margin: 0 10%;
    color: ${ props => props.color };
    font-size: 31px;
  }
`;
