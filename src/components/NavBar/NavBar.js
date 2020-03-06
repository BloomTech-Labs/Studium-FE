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
export const NavBar = ( { navBarVis, ...props } ) => {
  
  const usersState = useSelector( state => state.usersState );
  
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( '' );
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( navBarVis ){
      if( usersState.user && usersState.user.photoURL ){
        setAvatarUrl( usersState.user.photoURL );
      }else{
        setAvatarUrl( '' );
      }
    }else{
      setAvatarUrl( '' );
    }
  }, [ navBarVis, usersState ] );
  
  const logout = () => {
    setMenuOpen( false );
    dispatch( signOut() );
  };
  
  return ( <StyledBar visable={ navBarVis } className={ 'nav-bar' }>
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
  visible: PropTypes.bool,
};

const StyledBar = styled.div`
  background-color: #585858;
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: ${ props => ( props.visable ? '0' : '-74px' ) };
  width: 100%;
  height: 74px;

  @media screen and ${ devices.tablet } {
    width: 400px;
    height: 100vh;
    left: 0;
    top: 0;
  }
`;

