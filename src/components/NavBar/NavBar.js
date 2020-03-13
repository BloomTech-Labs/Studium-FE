import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerDiv, NavBarAvatar } from '../index.js';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { SvgContainer } from '../SvgContainer/SvgContainer.js';
import { signOut } from '../../actions';
import { SynapsBrain } from '../index.js';
import { mediaQueries, useAppHooks } from '../../customHooks/useAppHooks.js';
import NavBarLogo from './NavBarLogo.js';

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = ( { backgroundColor = 'inherit' } ) => {
  const { usersState, theme, dispatch, changePath, pathname } = useAppHooks();
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( '' );
  
  useEffect( () => {
    if( usersState.user && usersState.user.photoURL ){
      setAvatarUrl( usersState.user.photoURL );
    }else{
      setAvatarUrl( '' );
    }
    
  }, [ usersState ] );
  
  const logout = () => {
    dispatch( signOut() );
    changePath( '/' );
  };
  
  return (
    <StyledBar className={ 'nav-bar' } backgroundColor={ backgroundColor }>
      <WhiteLogo id={ 'svg' } fill={ 'blue' }/>
      <ContainerDiv
        justifyContent={ 'space-between' }
        className={ 'nav-bar-container' }
        height={ '75px' }
        position={ 'relative' }
        overFlowY={ 'visible' }
        backgroundColor={ backgroundColor }
      >
        <NavBarLogo/>
        
        <NavBarAvatar
          onClick={ logout }
          avatarUrl={ avatarUrl }
          className={ 'ant-dropdown-link' }
        />
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {
  backgroundColor: PropTypes.string,
};

const WhiteLogo = styled( SmallWhiteLogo )`
:

`;

const StyledBar = styled.div`
  background-color: ${ props => props.theme.primaryColor };
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: 0;
  width: 100%;
  height: 74px;
  border: ${ props => props.backgroundColor ?
  `2px solid ${ props.backgroundColor }` : '20px solid inherit' };
  overflow: visible;

  @media screen and ${ mediaQueries.tablet } {
    background-color: ${ props => props.backgroundColor };
  }
`;


