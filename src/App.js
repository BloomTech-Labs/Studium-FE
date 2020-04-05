import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {NavBar, Footer, RouteContainer} from './components';
import PropTypes from 'prop-types';
import {Alert} from 'antd';
import {devices} from './utilities/breakpoints-device.js';
import {useAppHooks} from './customHooks/useAppHooks.js';
import {useAuthStateChange} from './customHooks/useAuthStateChange.js';
import {ReactComponent as SvgDashboards} from '../src/images/Group.svg';

/**
 * App
 * @category Views
 * @component
 * @example return (<App />);
 */
function App(props) {
  const [alertMessage, setAlert] = useState('');
  const {theme, usersState, dispatch} = useAppHooks();

  useAuthStateChange();
  useEffect(() => {
    if (usersState.registerError && !alertMessage) {
      setAlert('Error logging in. Please try again later.');
    }
  }, [usersState]);

  return (
    <StyledApp className="App" theme={theme}>
      {alertMessage && (
        <Alert
          type={'error'}
          onClose={() => setAlert(false)}
          message={alertMessage}
          closable
          style={{
            position: 'absolute',
            top: '20px',
            zIndex: '15',
          }}
        />
      )}
      <NavBar />
      <SvgDashboards></SvgDashboards>
      <RouteContainer />
      <Footer />
    </StyledApp>
  );
}

App.propTypes = {
  theme: PropTypes.object,
  history: PropTypes.object,
};

const StyledApp = styled.div`
  box-sizing: border-box;
  position: relative;
  color: ${props => props.theme.color};
  padding: ${props => (props.navBarVis ? '75px 0 50px 0' : 0)};
  text-align: center;
  flex-direction: column;
  display: flex;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
  background: #e5e5e5;

  > SvgDashboards {
    height: 233px;
    width: 233px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  @media ${devices.tablet} {
    background-image: ${SvgDashboards};
  }

  @media ${devices.desktop} {
    background: #e5e5e5;
    background-image: ${SvgDashboards};
  }

  @media ${(devices.mobileS, devices.mobileM, devices.mobileL)} {
    background-image: ${SvgDashboards};
    background: #e5e5e5;
  }
`;

export default App;

/**
 * @typedef {function} Dispatch
 * @param {function} function
 * @returns none
 *
 */

/**
 * @typedef {object} User
 * @property {string} uid
 * @property {string} photoURL
 */
