import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AxiosWithAuth from '../../utils/axiosWithAuth.js';
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'

const DeckView = (props) => {

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
      <div>
         <NavbarDash />
         <h1>{deckName}</h1>
         <DeckViewCards />

      </div>
   )
}

export default DeckView