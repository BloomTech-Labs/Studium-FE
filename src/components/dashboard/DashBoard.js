import React, { useEffect } from 'react'
import { Deck, Decks, Title, CreateDeck, LabelsTwo } from './styles-dashboard/dashboardStyles.js'
import NavbarDash from '../navigation/NavBarDash.js'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DeckDetails from '../decks/DeckDetails.js'
import { logout } from '../../redux/actions'

const DashBoard = ({ match, location }) => {
  const userDecks = useSelector(state => state.userDecks)
  const dispatch = useDispatch()

  const handleClick = e => {
    e.preventDefault()
    dispatch(logout())
  }

  useEffect(() => {
    console.log('USERDECKS-->', userDecks)
  }, [])

  return (
    <div>
      <NavbarDash />
      <Title>Card Collection</Title>
      <Decks>
        <Link to="/create-deck" style={{ textDecoration: 'none' }}>
          <Deck>
            <LabelsTwo>
              <CreateDeck>Create a Deck</CreateDeck>
            </LabelsTwo>
          </Deck>
        </Link>
        {userDecks.map((deck) => {
          // console.log('DECK-->', deck)
          return (
            <DeckDetails deck={deck} key={deck.id} />
          )
        })}
      </Decks>
      <button onClick={handleClick}>LOGOUT</button>
    </div>
  )
}

export default DashBoard