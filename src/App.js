import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { Switch, withRouter } from 'react-router';
import LandingPage from './views/LandingPage';
import MainDashboard from './views/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import firebase from './firebase/FirebaseConfig';
import { signedIn, signout, fetchUser } from './actions';
import LoginSignUpRoute from './routes/LoginSignUpRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import StyledNavBar from './components/Styled/StyledNavBar';
import StyledContainer from './components/Styled/StyledContainer';
import CreateDeck from './views/CreateDeck';
import PreviewDeck from './views/PreviewDeck';
import FlashCard from './views/FlashCard';
import Testing from './views/Testing';
import {
  BrowserView, MobileView, isBrowser, isMobile,
} from 'react-device-detect';
import Footer from './components/Footer/Footer';

function App( props ){
  const user = useSelector( state => state.usersReducer );
  const dispatch = useDispatch();
  const [ navBarVisable, setVisable ] = useState( false );
  const [ dimensions, setDimensions ] = useState( {
    width: window.innerWidth, height: document.body.clientHeight,
  } );
  
  useEffect( () => {
    window.addEventListener( 'resize', updateDimensions );
    updateDimensions();
  }, [] );
  
  const updateDimensions = () => {
    setDimensions( {
      width: window.innerWidth, height: document.documentElement.scrollHeight,
    } );
  };
  
  //Promises. This function gets called in for google sign in
  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      const pathName = props.history.location.pathname;
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
  }, [dispatch, props.history] );
  
  return ( <StyledApp className="App" width={ dimensions.width }
                      height={ dimensions.width } mobile={ isMobile }>
    <StyledNavBar navBarVis={ navBarVisable } { ...props } />
    <StyledContainer navBarVis={ navBarVisable }
                     style={ { paddingBottom: '150px' } }>
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
        
        <LoginSignUpRoute path={ '/' } component={ LandingPage } { ...props } />
      </Switch>
    </StyledContainer>
    
    
    <Footer navBarVis={ navBarVisable }/>
  </StyledApp> );
}

const StyledApp = styled.div`
position: relative;
  color: ${ props => props.theme.color };
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
`;

export default withRouter( App );
