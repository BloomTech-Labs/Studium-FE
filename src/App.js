import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import styled, { ThemeContext } from 'styled-components';
import { Switch, withRouter } from 'react-router';
import LandingPage from './views/LandingPage';
import MainDashboard from './views/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import { signedIn, signout } from './actions';
import firebase from './config/firebase/FirebaseConfig';
import LoginSignUpRoute from './routes/LoginSignUpRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import StyledNavBar from './components/Styled/StyledNavBar';
import StyledContainer from './components/Styled/StyledContainer';
import CreateDeck from './views/CreateDeck';
import PreviewDeck from './views/PreviewDeck';
import FlashCard from './views/FlashCard';
import { isMobile } from 'react-device-detect';
import { Footer } from './components/Footer/Footer';
import Testing from './views/Testing';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

/**
 *
 * App
 * @param props
 * @returns {React.component}
 */
function App( props ){
  
  /**
   * @type {Dispatch} dispatch
   */
  const dispatch = useDispatch();
  const [ alertMessage, setAlert ] = useState( '' );
  const users = useSelector( state => {
    return state.usersReducer;
  } );
  const [ navBarVisable, setVisable ] = useState( false );
  
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
        signedIn( user, dispatch );
        if( pathName === '/signin' || pathName === '/signup' || pathName ===
          '/' ){
          props.history.push( '/dashboard' );
        }
      }else{
        signout( dispatch );
        setVisable( false );
      }
    } );
  }, [] );
  
  const themeContext = useContext( ThemeContext );
  return ( <StyledApp
    className="App"
    width={ themeContext.screenWidth }
    height={ themeContext.screenWidth }
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
    <StyledNavBar navBarVis={ navBarVisable } { ...props } />
    <StyledContainer
      className={ 'app-container' }
      navBarVis={ navBarVisable }
      position={ 'fixed' }
      top={ '0' }
      maxHeight={ themeContext.screenHeight }
      margin={ navBarVisable ? '75px 0 50px 0' : '0' }
    >
      <Switch>
        <LoginSignUpRoute path={ '/signup' }
                          component={ SignUp } { ...props } />
        <LoginSignUpRoute path={ '/signin' }
                          component={ SignIn } { ...props } />
        <ProtectedRoute path={ '/dashboard' } component={ MainDashboard }/>
        <ProtectedRoute path={ '/create/deck' } component={ CreateDeck }/>
        <ProtectedRoute path={ '/preview' } component={ PreviewDeck }/>
        <ProtectedRoute path={ '/game' } component={ FlashCard }/>
        <ProtectedRoute path={ '/test' } component={ Testing }/>
        
        <LoginSignUpRoute path={ '/' }
                          component={ LandingPage } { ...props } />
      </Switch>
    </StyledContainer>
    
    <Footer navBarVis={ navBarVisable }/>
  </StyledApp> );
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
 * @param {Action} action
 * @returns none
 *
 */

/**
 * @typedef {object} User
 * @property {string} uid
 */

