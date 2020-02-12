import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import LandingPage from './views/LandingPage';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from './components/StyledButton';
import { fetchUser } from './actions';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App(props) {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    fetchUser(dispatch);
  };

  return (
    <StyledApp className='App'>
      {/* <h1>App</h1>
      <h2>Is: Fetching: {user.fetching ? 'true' : 'false'}</h2>
      <div style={{ width: '40%', display: 'flex', margin: '0 auto' }}>
        <StyledButton
          onClick={handleButtonClick}
          icon={'download'}
          text={'Fetching'}
          shape={'round'}
          block={true}
        />
      </div> */}

      <Switch>
        <Route exact path={'/'} render={props => <LandingPage {...props} />} />
        {/*  Router commented out waiting on other components completion    */}
        <Route path={'/signup'} render={props => <SignUp {...props} />} />
        {/* <Route path={'/signin'} render={props => <SignIn {...props} />} /> */}
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: ${props => props.theme.color};
`;

export default App;
