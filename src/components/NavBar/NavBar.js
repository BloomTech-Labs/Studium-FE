import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ContainerDiv, NavBarAvatar} from '../index.js';
import {signOut} from '../../actions';
import theming from 'styled-theming';
import LogoLeft from './LogoLeft.js';
import {THEME, MEDIA_QUERIES} from '../../utilities/constants.js';
import {
  THEMING_VALUES,
  THEMING_VARIABLES,
} from '../../customHooks/themingRules.js';
import {APP_PATHS} from '../../utilities/constants.js';

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = ({getHooks}) => {
  const {usersState, dispatch, changePath, path} = getHooks('Nav Bar');
  const [setMenuOpen] = useState(false);
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

  const navBarRightContent = () => {
    if (path === APP_PATHS.SIGN_UP_PATH || path === APP_PATHS.LANDING_PAGE) {
      return (
        <Styledh2 onClick={() => changePath(APP_PATHS.SIGN_IN_PATH)}>
          Sign In
        </Styledh2>
      );
    } else if (path === APP_PATHS.SIGN_IN_PATH) {
      return (
        <Styledh2 onClick={() => changePath(APP_PATHS.SIGN_UP_PATH)}>
          Sign Up
        </Styledh2>
      );
    }

    return (
      <NavBarAvatar
        getHooks={getHooks}
        onClick={logout}
        avatarUrl={avatarUrl}
        className={'ant-dropdown-link'}
      />
    );
  };

  return (
    <StyledBar className={'nav-bar'}>
      <ContainerDiv
        justifyContent={'space-between'}
        className={'nav-bar-container'}
        flexDirection={'row'}
        width={'100%'}
        height={'75px'}
        position={'relative'}
        overFlowY={'hidden'}
        backgroundColor={'transparent'}
      >
        <LogoLeft getHooks={getHooks} />
        {navBarRightContent()}
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {};

const backgroundColor = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: THEME.navBarDark,
  [THEMING_VALUES.LIGHT]: THEME.navBarLight,
  [THEMING_VALUES.HIDDEN]: 'transparent',
});

const top = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: 0,
  [THEMING_VALUES.LIGHT]: 0,
  [THEMING_VALUES.HIDDEN]: '-75px',
});

const StyledBar = styled.div`
  background: ${backgroundColor};
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: ${top};
  width: 100%;
  height: ${props => props.theme.navBarTopHeight + 'px'};
`;

const color = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: 'white',
  [THEMING_VALUES.LIGHT]: props => props.theme.themeState.synapsDark,
  [THEMING_VALUES.HIDDEN]: props => props.theme.themeState.synapsDark,
});

const Styledh2 = styled.h2`
  display: flex;
  align-items: center;
  color: ${color};
  margin: 0 10% 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 24px;

  @media screen and ${MEDIA_QUERIES.desktop} {
    background: #eeece8;
  }
`;
