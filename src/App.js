import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavBar, Footer, RouteContainer } from './components';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { devices } from './utilities/breakpoints-device.js';
import { useAppHooks } from './customHooks/useAppHooks.js';
import { useAuthStateChange } from './customHooks/useAuthStateChange.js';

/**
 * App
 * @category Views
 * @component
 * @example return (<App />);
 */
function App( props ){
  const [ alertMessage, setAlert ] = useState( '' );
  const { theme, usersState, dispatch } = useAppHooks();
  
  useAuthStateChange();
  useEffect( () => {
    if( usersState.registerError && !alertMessage ){
      setAlert( 'Error logging in. Please try again later.' );
    }
  }, [ usersState ] );
  
  return ( <StyledApp
      className="App"
      theme={ theme }
    >
      { alertMessage && ( <Alert
        type={ 'error' }
        onClose={ () => setAlert( false ) }
        message={ alertMessage }
        closable
        style={ {
          position: 'absolute', top: '20px', zIndex: '15',
        } }
      /> ) }
      <NavBar/>
      <RouteContainer/>
      <Footer/>
    </StyledApp>
  );
}

App.propTypes = {
  theme: PropTypes.object, history: PropTypes.object,
};

const StyledApp = styled.div`
  box-sizing: border-box;
  position: relative;
  color: ${ props => props.theme.color };
  padding: ${ props => ( props.navBarVis ? '75px 0 50px 0' : 0 ) };
  text-align: center;
  flex-direction: column;
  display: flex;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
  
  @media ${ devices.tablet } {
    background: ${ props => props.theme.primaryColor };
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

