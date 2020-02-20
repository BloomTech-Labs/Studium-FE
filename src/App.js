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
import { signedIn, signout } from './actions';
import LoginSignUpRoute from './routes/LoginSignUpRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import StyledNavBar from './components/Styled/StyledNavBar';
import StyledContainer from './components/Styled/StyledContainer';
import CreateDeck from './views/CreateDeck';
import PreviewDeck from './views/PreviewDeck';
import FlashCard from './views/FlashCard';

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
  
  return ( <StyledApp className="App">
    <StyledNavBar visable={ navBarVisable } { ...props }/>
    <StyledContainer style={ { marginTop: '75px' } }>
      <Switch>
        <LoginSignUpRoute path={ '/signup' }
                          component={ SignUp } { ...props } />
        <LoginSignUpRoute path={ '/signin' }
                          component={ SignIn } { ...props } />
        <ProtectedRoute path={ '/dashboard' } component={ MainDashboard }/>
        <ProtectedRoute path={ '/create/deck' } component={ CreateDeck }/>
        <ProtectedRoute path={ '/preview' } component={ PreviewDeck }/>
        <ProtectedRoute path={ '/game' } component={ FlashCard }/>
        
        <LoginSignUpRoute path={ '/' } component={ LandingPage } { ...props } />
      </Switch>
    </StyledContainer>
  </StyledApp> );
}

const StyledApp = styled.div`
  color: ${ props => props.theme.color };
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export default withRouter( App );
