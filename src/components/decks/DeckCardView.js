import React, { useState, useEffect } from 'react';
import { CardItself, CardFront } from './styles-decks/DeckViewStyles.js'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'



const DeckCardView = ({ card }) => {

    const userDecks = useSelector(state => state.userDecks)
    const [deckId, setDeckId] = useState();

    const { card_front, card_back } = card
    const history = useHistory()

    useEffect(() => {
        const getDeckId = () => {
            userDecks.forEach(function (res) {
                console.log("this is the deck id ->", res.id)
                setDeckId(res.id)
            })
        }
        getDeckId();
    }, [])

    console.log("deckId on DeckCardView ->", deckId)

    return (
        <CardItself onClick={() => {
            history.push(`/deck/${deckId}/card/${card.id}`)
        }}>
            <CardFront>{card_front}</CardFront>
        </CardItself>
    )
}

export default DeckCardView