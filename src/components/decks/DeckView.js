import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AxiosWithAuth from '../../utils/axiosWithAuth.js';
import Card from '../cards/Card.js';

const DeckView = ({ deck2 }) => {

   const [cards, setCards] = useState([])


   useEffect(() => {
      const getCards = () => {
         AxiosWithAuth()
            .get(`/decks/${deck2}/cards`)
            .then(res => {
               setCards(res.data)
            })
            .catch(err => {
               console.log('Error with getting cards', err)
            })
      }
      getCards();
   }, [])


   return (
      <div>
         {cards.map(card => (
            <Card key={card.id} deck={card} />
         ))}
      </div>
   )
}

export default DeckView