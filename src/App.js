import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import styled, { ThemeContext } from 'styled-components';
import { Switch, withRouter } from 'react-router';
import LandingPage from './views/LandingPage';
import MainDashboard from './views/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import firebase from './firebase/FirebaseConfig';
import { signedIn, signout, fetchUser } from './actions';
import firebase from './config/firebase/FirebaseConfig';
import { signedIn, signout } from './actions';
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
import PropTypes from 'prop-types';
import Testing from './views/Testing';

function App( props ){
  const user = useSelector( state => state.usersReducer );
  const dispatch = useDispatch();
  const [ navBarVisable, setVisable ] = useState( false );
  
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
  }, [] );
  
  const calculateMaxHeight = () => {
    debugger;
    if( navBarVisable ){
      let height = themeContext.screenHeight - 125;
      height += 'px';
      return height;
    }else{
      return '100vh';
    }
    
  };
  
  const themeContext = useContext( ThemeContext );
  return (
    
    <StyledApp className="App" width={ dimensions.width }
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
          
          <LoginSignUpRoute path={ '/' }
                            component={ LandingPage } { ...props } />
        </Switch>
      </StyledContainer>
      
      <Footer navBarVis={ navBarVisable }/>
    </StyledApp> );
}

const StyledApp = styled.div`
box-sizing: border-box;
position: relative;
  color: ${ props => props.theme.color };
  padding: ${ props => props.navBarVis ? '75px 0 50px 0' : 0 };
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;
  `;

export default withRouter( App );
