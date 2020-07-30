import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'
import { useParams, Link } from 'react-router-dom'

import { MainWrapper, H1, H2, NamesWrapper, CardWrapper, FooterWrapper, EditButton, StudyButton } from './styles-decks/DeckViewStyles.js'

const DeckView = ({ match, location }) => {

   const userDecks = useSelector(state => state.userDecks)
   const [deckName, setDeckName] = useState();

   const { id } = useParams()

   useEffect(() => {
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
         }
      })
   }, [])

   return (
      <MainWrapper>
         <NavbarDash />
         <NamesWrapper>
            <H1>{deckName}</H1>
            <H2>Cards</H2>
         </NamesWrapper>
         <DeckViewCards />
         <FooterWrapper>
            <EditButton>Edit Deck</EditButton>
            <Link to={`/deck/${id}/study`}>
               <StudyButton>Study</StudyButton>
            </Link>
            
         </FooterWrapper>
      </MainWrapper>
   )
}

export default DeckView