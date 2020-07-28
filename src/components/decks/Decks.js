import React, { useState, useEffect } from 'react'
import { Labels, DeckTitle, CardCount, Deck } from '../dashboard/dashboardStyles.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const DeckDetails = ({ deck, match, location }) => {
    const { deck_name, deck_img } = deck;



    const [cards, setCards] = useState([]);


    useEffect(() => {
        const getCards = () => {
            AxiosWithAuth()
                .get(`/decks/${deck.id}/cards`)
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
        <Link to={`/deck/${deck.id}`} style={{ textDecoration: 'none' }}>
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