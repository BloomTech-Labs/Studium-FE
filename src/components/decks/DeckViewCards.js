import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import DeckCardView from './DeckCardView.js';

const DeckViewCards = () => {
    const userDecks = useSelector(state => state.userDecks)
    const [deck2, setDeck2] = useState();
    const [deckId, setDeckId] = useState();
    const [cards, setCards] = useState([])

    useEffect(() => {
        const getDeckId = () => {
            userDecks.forEach(function (res) {
                console.log("this is the deck id ->", res.id)
                setDeckId(res.id)
            })
        }
        getDeckId();
    }, [])


    useEffect(() => {
        const getCards = () => {
            AxiosWithAuth()
                .get(`/decks/${deckId}/cards`)
                .then(res => {
                    console.log("these are the cards ->", res.data)
                    setCards(res.data)
                })
                .catch(err => {
                    console.log('Error with getting cards', err)
                })
        }
        getCards();
    }, [deckId])

    return (
        <div>
            {cards.map(card => (
                <DeckCardView key={card.id} card={card} />
            ))}
        </div>
    )
}

export default DeckViewCards