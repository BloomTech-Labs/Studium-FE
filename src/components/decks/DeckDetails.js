import React, { useState, useEffect } from 'react'
import { Labels, DeckTitle, CardCount, Deck } from '../dashboard/styles-dashboard/dashboardStyles.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAllCardsInDeck } from '../../redux/actions'

const DeckDetails = ({ deck, match, location, props }) => {
    const dispatch = useDispatch()

    const { deck_name, id } = deck;

    const [cards, setCards] = useState([]);

    const handleClick = e => {
        dispatch(getAllCardsInDeck(deck.id))
    }

    useEffect(() => {
        const getCards = () => {
            AxiosWithAuth()
                .get(`/decks/${id}/cards`)
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
        <Link to={`/deck/${id}`} style={{ textDecoration: 'none' }} onClick={handleClick}>
            <Deck>
                <Labels>
                    <DeckTitle>{deck_name}</DeckTitle>
                    <CardCount>{cards.length} cards</CardCount>
                </Labels>
            </Deck>
        </Link>
    );
}

export default DeckDetails;