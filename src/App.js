import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router';
import LandingPage from './views/LandingPage';
import MainDashboard from './views/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './actions';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import firebase from './firebase/FirebaseConfig';
import { signedIn, signout } from './actions';
import LoginSignUpRoute from './routes/LoginSignUpRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import LogoutView from './views/LogoutView';

function App(props) {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

//Promises. This function gets called in for google sign in
  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      const pathName = props.history.location.pathname;
      if( user ){
        signedIn( user, dispatch );
        if( pathName === '/signin' || pathName === '/signup' || pathName ===
          '/' ){
          props.history.push( '/dashboard' );
        }
      } else {
        signout(dispatch);
      }
    });
  }, []);

  const handleButtonClick = () => {
    fetchUser(dispatch);
  };

  return (
    <StyledApp className="App">
      <Switch>
        <LoginSignUpRoute path={'/signup'} component={SignUp} {...props} />
        <LoginSignUpRoute path={'/signin'} component={SignIn} {...props} />
        <ProtectedRoute path={'/dashboard'} component={MainDashboard} />
        <LoginSignUpRoute path={'/'} component={LandingPage} {...props} />
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: ${props => props.theme.color};
  height: 100%;
  text-align: center;
`;

export default withRouter(App);
