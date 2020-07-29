import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AxiosWithAuth from '../../utils/axiosWithAuth.js';
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'
import { useParams } from 'react-router-dom'

import { MainWrapper, H1, H2, NamesWrapper, CardWrapper, FooterWrapper, EditButton, StudyButton } from './styles-decks/DeckViewStyles.js'

const DeckView = ({ match, location }) => {

   const userDecks = useSelector(state => state.userDecks)
   const [deckName, setDeckName] = useState();

   const { id } = useParams()

   // const getDeckName = () => {userDecks.map(deck => {
   //    if (deck.id === id) {
   //       setDeckName(deck.deck_name)
   //    }
   // })

   useEffect(() => {
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
         }
      })
   }, [])


   // useEffect(() => {
   //    const getDeckName = () => {
   //       userDecks.forEach(function (res) {
   //          console.log("this is the deck name ->", res.deck_name)
   //          setDeckName(res.deck_name)
   //       })
   //    }
   //    getDeckName();
   //    console.log('ACTIVE DECK-->', activeDeck)
   // }, [])

   

   // const getDeckName = (id) => {
   //    userDecks.filter(deck => deck.id === id)
   //    setDeckName(deck.deck_name)
   //    console.log(deckName)
   //    return deckName
   // }

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
            <StudyButton>Study</StudyButton>
         </FooterWrapper>
      </MainWrapper>
   )
}

export default DeckView