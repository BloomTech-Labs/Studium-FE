import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {useTheme, ThemeContext} from 'styled-components';
import {ContainerDiv, NavBarAvatar} from '../index.js';
import {ReactComponent as SmallWhiteLogo} from '../../images/SmallWhiteLogo.svg';
import {signOut} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {devices} from '../../utilities/breakpoints-device.js';
import {SynapsBrain} from '../index.js';
import {useAppHooks} from '../../customHooks/useAppHooks.js';

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = () => {
  const {usersState, theme, dispatch, changePath, pathname} = useAppHooks();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (usersState.user && usersState.user.photoURL) {
      setAvatarUrl(usersState.user.photoURL);
    } else {
      setAvatarUrl('');
    }
  }, [usersState]);

  const logout = () => {
    setMenuOpen(false);
    signOut(dispatch);
  };

  const showAvatar = () => {
    if (theme.screenWidth < 768) {
      return true;
    } else {
      if (pathname === '/signup' || pathname === '/signin') {
        return false;
      } else {
        return true;
      }
    }
  };

  const getSignUpText = () => {
    if (theme.screenWidth > 768) {
      if (pathname === '/signup') {
        return <Styledh2>SignIn</Styledh2>;
      } else if (pathname === '/signin') {
        return <Styledh2>SignUp</Styledh2>;
      }
    } else {
      return false;
    }
  };

  return (
    <StyledBar className={'nav-bar'}>
      <ContainerDiv
        justifyContent={'space-between'}
        className={'nav-bar-container'}
        height={'75px'}
        position={'relative'}
        overFlowY={'hidden'}
      >
        {theme.screenWidth < 704 && (
          <SynapsBrain
            zIndex={1}
            position={'absolute'}
            backgroundColor={theme.primaryColor}
            color={'#164172'}
            opacity={1}
            strokeColor={theme.primaryColor}
            viewBox={'225 25 400 400'}
          />
        )}

        <SmallWhiteLogo
          style={{
            position: 'absolute',
            left: '6%',
            top: '50%',
            transform: 'transition(0, -53%)',
          }}
        />
        {showAvatar() && (
          <NavBarAvatar
            onClick={logout}
            avatarUrl={avatarUrl}
            className={'ant-dropdown-link'}
          />
        )}

        {getSignUpText()}
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {};

const StyledBar = styled.div`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: 0;
  width: 100%;
  height: 74px;

  @media screen and ${props => props.theme.devices.tablet} {
  }
`;

const Styledh2 = styled.h2`
  display: flex;
  align-items: center;
  color: #fff;
  position: absolute;
  width: 95px;
  height: 24px;
  left: 1197px;
  top: 38px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 24px;
`;
