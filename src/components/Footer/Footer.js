import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { devices } from '../../utilities/breakpoints-device.js';
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
  
  const { history, theme } = useAppHooks();
  
  /**
   * Add Deck
   * @description Function called to add a deck to the users decks.
   * @function
   * @name addDeck
   */
  const addDeck = () => {
    history.push( '/create/deck' );
    
  };
  
  return ( <StyledFooter { ...props } theme={ theme } className={ 'footer' }>
    <ContainerDiv
      className={ 'footer-container' }
      maxHeight={ '50px' }
      style={ {
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
      } }
      overFlowY={ 'visible' }
    >
      <StyledIcon
        type="home"
        theme={ 'filled' }
        color={ props.theme ? props.theme.gray939598 : 'gray' }
      />
      <StyledIcon
        type="folder-open"
        theme={ 'filled' }
        color={ props.theme ? props.theme.grayD1D3D4 : 'gray' }
      />
    </ContainerDiv>
  </StyledFooter> );
};

Footer.prototypes = {
  navBarVis: PropTypes.bool,
};

const StyledFooter = styled.div`
position: absolute;
bottom: ${ props => props.navBarVis ? 0 : '-75px' };
  margin-top: auto;
  min-width: 100vw;
  height: 50px;
  background-color: "##ECE2D2";
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ${ devices.tablet } {
    bottom: -75px;
  }
`;

const StyledIcon = styled( Icon )`
  && {
    color: ${ props => props.color };
    font-size: 31px;
  }
`;
