import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import DeckCardView from './DeckCardView.js';

import { useParams, useHistory, Link } from 'react-router-dom'

import { CardWrapper, CardItself, CardFront } from './styles-decks/DeckViewStyles.js'

const DeckViewCards = ({ match, location }) => {
    const userDecks = useSelector(state => state.userDecks)
    const deckCards = useSelector(state => state.deckCards)

    const [deckId, setDeckId] = useState();
    const [cards, setCards] = useState([])
    const [cardId, setCardId] = useState();

    const history = useHistory()
    const { id } = useParams()

    // useEffect(() => {
    //     const getDeckId = () => {
    //         userDecks.forEach(function (res) {
    //             console.log("this is the deck id ->", res.id)
    //             setDeckId(res.id)
    //         })
    //     }
    //     getDeckId();
    // }, [])


    // useEffect(() => {
    //     const getCards = () => {
    //         AxiosWithAuth()
    //             .get(`/decks/${deckId}/cards`)
    //             .then(res => {
    //                 console.log("these are the cards ->", res.data)
    //                 setCards(res.data)
    //             })
    //             .catch(err => {
    //                 console.log('Error with getting cards', err)
    //             })
    //     }
    //     getCards();
    // }, [deckId])

    // console.log("deckId ->", deckId)

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