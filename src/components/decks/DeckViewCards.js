import React from 'react'
import { useSelector } from 'react-redux'
import DeckCardView from './DeckCardView.js';

import { useParams, Link } from 'react-router-dom'

import { CardWrapper, CardItself, CardFront } from './styles-decks/DeckViewStyles.js'

const DeckViewCards = ({ match, location }) => {
    const deckCards = useSelector(state => state.deckCards)
    const { id } = useParams()

    return (

        <>
            <CardWrapper>
                {deckCards.map(card => (
                    <DeckCardView key={card.id} card={card} />
                ))}
                <Link to={`/deck/${id}/create-card`} style={{ textDecoration: 'none'}}>
                    <CardItself><CardFront>Add Card</CardFront></CardItself>
                </Link>
            </CardWrapper>
        </>
    )
}

export default DeckViewCards