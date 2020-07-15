import React, { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { Deck, Labels, Decks, Title, DeckTitle, CardCount, CreateDeck, LabelsTwo } from './dashboardStyles.js'
import { H1, NavBar } from '../navigation/NavBarDash.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'

import DeckDetails from '../decks/Decks.js'

import { Link } from 'react-router-dom';

const DashBoard = (props) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  useEffect(() => {
    const getDecks = () => {
      AxiosWithAuth()
        .get('https://studium-be.herokuapp.com/api/decks')
        .then(res => {
          setDecks(res.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getDecks();
  }, []);

  return (
    <div>
      <NavBar>
        <H1>Studium</H1>
      </NavBar>
      <Title>Card Collection</Title>
      <Decks>
        <Deck>
          <LabelsTwo>
            <CreateDeck>Create a Deck</CreateDeck>
          </LabelsTwo>
        </Deck>
        {decks.map(deck => (
          <DeckDetails key={deck.id} deck={deck} />
        ))}


      </Decks>
    </div>
  )
}

export default DashBoard