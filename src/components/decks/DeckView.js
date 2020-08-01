import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'
import { useParams, Link } from 'react-router-dom'
import { setDeckBeingEdited } from '../../redux/actions'

import { MainWrapper, H1, H2, NamesWrapper, FooterWrapper, EditButton, StudyButton } from './styles-decks/DeckViewStyles.js'

const DeckView = ({ match, location }) => {
   const dispatch = useDispatch()
   const userDecks = useSelector(state => state.userDecks)
   const [deckName, setDeckName] = useState()
   const [deckToEdit, setDeckToEdit] = useState()

   const { id } = useParams()

   useEffect(() => {
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
            setDeckToEdit(deck)
         }
      })
   }, [])

   const handleClick = () => {
      console.log('deckToEdit-->', deckToEdit)
      dispatch(setDeckBeingEdited(deckToEdit))
  }

   return (
      <MainWrapper>
         <NavbarDash />
         <NamesWrapper>
            <H1>{deckName}</H1>
            <H2>Cards</H2>
         </NamesWrapper>
         <DeckViewCards />
         <FooterWrapper>
            <Link to={`/deck/${id}/edit-deck`}>
               <EditButton onClick={handleClick}>Edit Deck</EditButton>
            </Link>
            <Link to={`/deck/${id}/study`}>
               <StudyButton>Study</StudyButton>
            </Link>
            
         </FooterWrapper>
      </MainWrapper>
   )
}

export default DeckView