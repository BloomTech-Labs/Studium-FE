import React from 'react'
import { Route } from 'react-router-dom'
import { LoginCallback, SecureRoute } from '@okta/okta-react'
import { createGlobalStyle } from "styled-components"
import ProtectedRoute from './utils/ProtectedRoute'
import SplashPage from './components/splash page/SplashPage'
import Register from './components/register/Register'
import OktaLogin from './components/login/OktaLogin'
import Login from './components/login/Login'
import DashBoard from './components/dashboard/DashBoard'
import CreateDeckForm from './components/decks/CreateDeckForm'
import CreateCardForm from './components/cards/CreateCardForm'
import DeckView from './components/decks/DeckView'
import EditDeck from './components/decks/EditDeck'
import EditCard from './components/cards/EditCard'
import IndCardView from './components/cards/IndCardView.js'
import StudyView from './components/decks/StudyView'
import DeckMetrics from './components/decks/DeckMetrics'
import VisTest from './components/visualizations/VisTest'
import './App.css';


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
      <GlobalStyle />
      <Route exact path='/' component={SplashPage} data-test-id='route'/>
      <Route path={CALLBACK_PATH} component={LoginCallback} />
      <Route path='/register' component={Register} />
      <Route path='/okta-login' component={OktaLogin} />
      <Route path='/login' component={Login} />
      <Route path='/vistest' component={VisTest} />
      <ProtectedRoute path='/dashboard' component={DashBoard} />
      <ProtectedRoute path='/create-deck' component={CreateDeckForm} />
      <ProtectedRoute path='/deck/:id/create-card' component={CreateCardForm} />
      <ProtectedRoute exact path='/deck/:id' component={DeckView} />
      <Route path='/deck/:id/stats' component={DeckMetrics} />
      <ProtectedRoute path='/deck/:id/card/:cardId' component={IndCardView} />
      <ProtectedRoute path='/deck/:id/edit-deck' component={EditDeck} />
      <ProtectedRoute path='/deck/:id/edit-card/:cardId' component={EditCard} />
      <ProtectedRoute path='/deck/:id/study' component={StudyView} />
    </div>
  );
}

export default App;