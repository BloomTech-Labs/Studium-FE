import React from 'react';
import { Route } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';
import SplashPage from './components/splash page/SplashPage';
import Register from './components/register/Register';
import OktaLogin from './components/login/OktaLogin';
import Login from './components/login/Login';
import DashBoard from './components/dashboard/DashBoard';
import CreateDeckForm from './components/decks/CreateDeckForm';
import CreateCardForm from './components/cards/CreateCardForm';
import DeckView from './components/decks/DeckView';
import EditDeck from './components/decks/EditDeck';
import StudyView from './components/decks/StudyView';
import './App.css';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`
const CALLBACK_PATH = '/implicit/callback';

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
      <Route exact path='/splash' component={SplashPage} />
      <Route path={CALLBACK_PATH} component={LoginCallback} />
      <Route path='/register' component={Register} />
      <Route path='/okta-login' component={OktaLogin} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={DashBoard} />
      <SecureRoute path='/create-deck' component={CreateDeckForm} />
      <SecureRoute path='/deck/:id/create-card' component={CreateCardForm} />
      <SecureRoute path='/deck/:id' component={DeckView} />
      <SecureRoute path='/deck/:id/edit-deck' component={EditDeck} />
      <SecureRoute path='/deck/:id/study' component={StudyView} />
    </div>
  );
}

export default App;