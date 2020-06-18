import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from './components/splash page/SplashPage';
import Register from './components/register/Register'
import Login from './components/login/Login';
import DashBoard from './components/dashboard/DashBoard';
import CreateDeckForm from './components/decks/CreateDeckForm';
import CreateCardForm from './components/cards/CreateCardForm';
import DeckView from './components/decks/DeckView';
import EditDeck from './components/decks/EditDeck';
import StudyView from './components/decks/StudyView';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={SplashPage} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={DashBoard} />
      <Route path='/create-deck' component={CreateDeckForm} />
      <Route path='/deck/:id/create-card' component={CreateCardForm} />
      <Route path='/deck/:id' component={DeckView} />
      <Route path='/deck/:id/edit-deck' component={EditDeck} />
      <Route path='/deck/:id/study' component={StudyView} />
    </div>
  );
}

export default App;