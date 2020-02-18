import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import LandingPage from './views/LandingPage';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from './components/Styled/StyledButton';
import { fetchUser } from './actions';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import firebase from './firebase/FirebaseConfig';
import { signedIn, signout } from './actions';

function App( props ){
  const user = useSelector( state => state.usersReducer );
  const dispatch = useDispatch();

//Promises. This function gets called in for google sign in
  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      
      if( user ){
        signedIn( user, dispatch );
      }else{
        signout( dispatch );
      }
    } );
  }, [] );
  
  const handleButtonClick = () => {
    fetchUser( dispatch );
  };
  
  return ( <StyledApp className='App'>
      <Switch>
        <Route exact path={ '/' }
               render={ props => <LandingPage { ...props } /> }/>
        <Route path={ '/signup' } render={ props => <SignUp { ...props } /> }/>
        <Route path={ '/signin' } render={ props => <SignIn { ...props } /> }/>
      </Switch>
    </StyledApp> );
}

const StyledApp = styled.div`
  color: ${ props => props.theme.color };
  height: 100%;
  text-align: center;
`;

export default App;
