import React, { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { Deck, Labels, Decks, Title, DeckTitle, CardCount, CreateDeck, LabelsTwo } from './dashboardStyles.js'
import { H1, NavBar } from '../navigation/NavBarDash.js'

const DashBoard = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

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

  return (
    <div>
      <NavBar>
        <H1>Studium</H1>
      </NavBar>
      <Title>Card Collection</Title>
      <Decks>
        <Deck>
          <Labels>
            <DeckTitle>Deck Title</DeckTitle>
            <CardCount>2 cards</CardCount>
          </Labels>
        </Deck>
        <Deck>
          <LabelsTwo>
            <CreateDeck>Create a Deck</CreateDeck>
          </LabelsTwo>
        </Deck>
      </Decks>
    </div>
  )
}

export default DashBoard