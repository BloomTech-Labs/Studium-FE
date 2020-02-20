import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router';
import LandingPage from './views/LandingPage';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from './components/Styled/StyledButton';
import { fetchUser } from './actions';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import firebase from './firebase/FirebaseConfig';
import { signedIn, signout } from './actions';
import LoginSignUpRoute from './routes/LoginSignUpRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import LogoutView from './views/LogoutView';
import BigFlashCard from './components/Styled/BigFlashCard';

function App( props ){
  const user = useSelector( state => state.usersReducer );
  const dispatch = useDispatch();

//Promises. This function gets called in for google sign in
  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      
      if( user ){
        signedIn( user, dispatch );
        if( props.history.location.pathname == '/signin' ||
          props.history.location.pathname == '/signup' ||
          props.history.location.pathname == '/' ){
          props.history.push( '/dashboard' );
        }
      }else{
        signout( dispatch );
      }
    } );
  }, [] );
  
  const handleButtonClick = () => {
    fetchUser( dispatch );
  };
  const card = {
    id: 5,
    // image:"Picture",
    question: "This is the question",
    answer: "This is the answer"
  }
  return ( <StyledApp className='App'>
    {/* <BigFlashCard flashCard = {card}></BigFlashCard> */}
    <Switch>
      
      <LoginSignUpRoute path={ '/signup' }
                        component={ SignUp } { ...props }/>
      <LoginSignUpRoute path={ '/signin' }
                        component={ SignIn } { ...props }/>
      <ProtectedRoute path={ '/dashboard' } component={ LogoutView }/>
      <LoginSignUpRoute path={ '/' }
                        component={ LandingPage } { ...props }
      />
    </Switch>
  </StyledApp> );
}

const StyledApp = styled.div`
  color: ${ props => props.theme.color };
  height: 100%;
  text-align: center;
`;

export default withRouter( App );
