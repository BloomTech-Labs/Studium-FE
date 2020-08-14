import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCardsInDeck } from '../../redux/actions'
import DeckCardView from './DeckCardView.js'
import { useParams, Link } from 'react-router-dom'
import { CardWrapper, CardItself, CardFront } from './styles-decks/DeckViewStyles.js'

const DeckViewCards = ({ match, location }) => {
    const dispatch = useDispatch()
    const deckCards = useSelector(state => state.deckCards)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getAllCardsInDeck(id))
    }, [])

    return (
        <>
            <CardWrapper>
                {deckCards.map(card => (
                    <DeckCardView key={card.id} displayedCard={card} />
                ))}
                <Link to={`/deck/${id}/create-card`} style={{ textDecoration: 'none'}}>
                    <CardItself><CardFront>Add Card</CardFront></CardItself>
                </Link>
            </CardWrapper>
        </>
    )
}

export default DeckViewCards