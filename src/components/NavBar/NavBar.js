import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {useTheme, ThemeContext} from 'styled-components';
import {ContainerDiv, NavBarAvatar} from '../index.js';
import {ReactComponent as SmallWhiteLogo} from '../../images/SmallWhiteLogo.svg';
import {signOut} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {devices} from '../../utilities/breakpoints-device.js';
import {SynapsBrain} from '../index.js';
import {useHistory} from 'react-router';
import {useAppHooks} from '../../customHooks/useAppHooks.js';

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = () => {
  const {usersState, theme, dispatch, changePath} = useAppHooks();
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
    dispatch(signOut());
    changePath('/');
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
        <NavBarAvatar
          onClick={logout}
          avatarUrl={avatarUrl}
          className={'ant-dropdown-link'}
        />
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

  @media screen and ${devices.tablet} {
  }

  @media screen and ${devices.desktop} {
    background: #eeece8;
  }
`;
