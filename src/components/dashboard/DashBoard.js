import React, { useState, useEffect } from 'react'
import { Deck, Labels, Decks, Title, DeckTitle, CardCount, CreateDeck, LabelsTwo } from './dashboardStyles.js'
import NavbarDash from '../navigation/NavBarDash.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { useSelector, useDispatch } from 'react-redux'
import store from '../../redux/index'

import DeckDetails from '../decks/Decks.js'

const DashBoard = ({ match, location }) => {
  const userDecks = useSelector(state => state.userDecks)
  // const [decks, setDecks] = useState(userDecks)

  // useEffect(() => {
  //   if (!authState.isAuthenticated) {
  //     // When user isn't authenticated, forget any user info
  //     setUserInfo(null);
  //   } else {
  //     authService.getUser().then((info) => {
  //       setUserInfo(info);
  //     });
  //   }
  // }, [authState, authService]); // Update if authState changes

  return (
    <div>
      <NavbarDash />
      <Title>Card Collection</Title>
      <Decks>
        <Deck>
          <LabelsTwo>
            <CreateDeck>Create a Deck</CreateDeck>
          </LabelsTwo>
        </Deck>
        {userDecks.map(deck => (
          <DeckDetails key={deck.id} deck={deck} />
        ))}


      </Decks>
    </div>
  )
}

export default DashBoard