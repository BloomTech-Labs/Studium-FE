import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerDiv, NavBarAvatar } from '../index.js';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { signOut } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { devices } from '../../utilities/breakpoints-device.js';

/**
 * Styled Nav Bar
 *
 * Nav Bar Component
 *
 * @function
 * @name NavBar
 * @returns React.Component
 */
export const NavBar = ( props ) => {
  const pathName = props.history.location.pathname;
  const { theme } = props;
  const usersState = useSelector( state => state.usersState );
  
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( '' );
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( usersState.user && usersState.user.photoURL ){
      setAvatarUrl( usersState.user.photoURL );
    }else{
      setAvatarUrl( '' );
    }
    
  }, [ pathName ] );
  
  const logout = () => {
    setMenuOpen( false );
    dispatch( signOut() );
  };
  
  return ( <StyledBar className={ 'nav-bar' } { ...props }>
    <ContainerDiv
      justifyContent={ 'space-between' }
      className={ 'nav-bar-container' }
      height={ '75px' }
      position={ 'relative' }
    >
      <SmallWhiteLogo
        style={ {
          position: 'absolute',
          left: '6%',
          top: '50%',
          transform: 'transition(0, -53%)',
        } }
      />
      <NavBarAvatar
        onClick={ logout }
        avatarUrl={ avatarUrl }
        className={ 'ant-dropdown-link' }
      />
    </ContainerDiv>
  </StyledBar> );
};

NavBar.propTypes = {
  theme: PropTypes.object,
};

const StyledBar = styled.div`
  background-color: ${ props => props.theme.primaryColor };
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: 0;
  width: 100%;
  height: 74px;

  @media screen and ${ devices.tablet } {
  
  }
`;

const StyledHeader = styled.h2`
  color: white;
  position: absolute;
  right: 10%;
  top: 38px;
  font-weight: bold;
  font-size: 28px;
  line-height: 24px;
  font-family: Source Sans Pro;
`;

