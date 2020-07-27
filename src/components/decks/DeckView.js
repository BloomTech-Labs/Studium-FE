import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AxiosWithAuth from '../../utils/axiosWithAuth.js';
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'

import { MainWrapper, H1, H2, NamesWrapper, CardWrapper, FooterWrapper, EditButton, StudyButton } from './styles-decks/DeckViewStyles.js'

const DeckView = ({ match, location }) => {

   const userDecks = useSelector(state => state.userDecks)
   const [deckName, setDeckName] = useState();


   useEffect(() => {
      const getDeckName = () => {
         userDecks.forEach(function (res) {
            console.log("this is the deck name ->", res.deck_name)
            setDeckName(res.deck_name)
         })
      }
      getDeckName();
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
            <StudyButton>Study</StudyButton>
         </FooterWrapper>
      </MainWrapper>
   )
}

export default DeckView