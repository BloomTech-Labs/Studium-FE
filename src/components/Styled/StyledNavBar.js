import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledAvatar from './StyledAvatar';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { signout } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import StyledContainer from './StyledContainer';
import { devices } from '../../util/breakpoints-device.js';

const StyledNavBar = ({ navBarVis, ...props }) => {
  const user = useSelector(state => state.users);
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navBarVis) {
      if (user.user && user.user.photoURL) {
        setAvatarUrl(user.user.photoURL);
      } else {
        setAvatarUrl(false);
      }
    } else {
      setAvatarUrl(false);
    }
  }, [navBarVis, user]);

  const logout = () => {
    setMenuOpen(false);
    signout(dispatch);
  };

  return (
    <StyledBar visable={navBarVis} className={'nav-bar'}>
      <StyledContainer
        justifyContent={'space-between'}
        className={'nav-bar-container'}
        height={'75px'}
        position={'relative'}
      >
        <SmallWhiteLogo
          style={{
            position: 'absolute',
            left: '6%',
            top: '50%',
            transform: 'transition(0, -53%)',
          }}
        />

        <StyledAvatar
          onClick={logout}
          avatarUrl={avatarUrl}
          className={'ant-dropdown-link'}
        />
      </StyledContainer>
    </StyledBar>
  );
};

StyledNavBar.propTypes = {
  visible: PropTypes.bool,
};

const StyledBar = styled.div`
  background-color: #585858;
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: ${props => (props.visable ? '0' : '-74px')};
  width: 100%;
  height: 74px;
  transition: all 2s;

  @media screen and ${devices.tablet} {
    width: 400px;
    height: 100vh;
    left: 0;
    top: 0;
  }
`;

export default StyledNavBar;
