import React, { useEffect, useState } from 'react';
import styled, { ThemeContext, useTheme } from 'styled-components';
import { Switch, withRouter } from 'react-router';
import {
  LandingPage, Dashboard, SignUp, SignIn, CreateDeck, PreviewDeck, FlashCard,
  Testing,
} from './views';
import { useSelector, useDispatch } from 'react-redux';
import { signedIn, signOut } from './actions';
import firebase from './config/firebase/FirebaseConfig';
import { LoginSignUpRoute, ProtectedRoute } from './routes';
import { NavBar, ContainerDiv, Footer } from './components';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

/**
 *
 * App
 * @param props
 * @returns React.Component
 */
function App( props ){
  
  /**
   * @type {Dispatch} dispatch
   */
  const dispatch = useDispatch();
  const [ alertMessage, setAlert ] = useState( '' );
  const users = useSelector( state => {
    return state.usersState;
  } );
  const [ navBarVisible, setVisable ] = useState( false );
  
  useEffect( () => {
    if( users.registerError && !alertMessage ){
      setAlert( 'Error logging in. Please try again later.' );
    }
  }, [ users ] );
  
  //Promises. This function gets called in for google sign in
  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      const pathName = props.history.location.pathname;
      /**
       * @type {User} user
       */
      if( user ){
        setVisable( true );
        dispatch( signedIn( user ) );
        if( pathName === '/signIn' || pathName === '/signup' || pathName ===
          '/' ){
          props.history.push( '/dashboard' );
        }
      }else{
        signOut( dispatch );
        setVisable( false );
      }
    } );
  }, [] );
  
  /**
   * @type {Theme} theme
   */
  const theme = useTheme( ThemeContext );
  return (
    
    <StyledApp
      className="App"
      width={ theme.screenWidth }
      height={ theme.screenHeight }
      mobile={ isMobile }
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
      <NavBar navBarVis={ navBarVisible } { ...props } />
      <ContainerDiv
        className={ 'app-container' }
        navBarVis={ navBarVisible }
        position={ 'fixed' }
        top={ '0' }
        maxHeight={ theme.screenHeight }
        margin={ navBarVisible ? '75px 0 50px 0' : '0' }
      >
        <Switch>
          <LoginSignUpRoute path={ '/signup' }
                            component={ SignUp } { ...props } />
          <LoginSignUpRoute path={ '/signIn' }
                            component={ SignIn } { ...props } />
          <ProtectedRoute path={ '/dashboard' } component={ Dashboard }/>
          <ProtectedRoute path={ '/create/deck' } component={ CreateDeck }/>
          <ProtectedRoute path={ '/preview' } component={ PreviewDeck }/>
          <ProtectedRoute path={ '/game' } component={ FlashCard }/>
          <ProtectedRoute path={ '/test' } component={ Testing }/>
          
          <LoginSignUpRoute path={ '/' }
                            component={ LandingPage } { ...props } />
        </Switch>
      </ContainerDiv>
      
      <Footer navBarVis={ navBarVisible }/>
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
`;

export default withRouter( App );

/**
 * @typedef {function} Dispatch
 * @param {function} function
 * @returns none
 *
 */

/**
 * @function
 * @name UseSelector
 * @param {SelectorCallback} cb
 * returns cb
 */

/**
 * @callback SelectorCallback
 * @param {RootState} state
 * @returns {*}
 */

/**
 * @function
 * @name useDispatch
 * returns Dispatch
 */

/**
 * @typedef {object} User
 * @property {string} uid
 * @property {string} photoURL
 */

