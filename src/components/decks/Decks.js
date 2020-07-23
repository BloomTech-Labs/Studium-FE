import React, { useState, useEffect } from 'react'
import { Labels, DeckTitle, CardCount, Deck } from '../dashboard/dashboardStyles.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const DeckDetails = ({ deck }) => {
    const { deck_name, deck_img } = deck;

    const userDecks = useSelector(state => state.userDecks)

    const [cards, setCards] = useState([]);
    const [deck2, setDeck2] = useState();

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

    useEffect(() => {
        const getDeck2 = () => {
            userDecks.forEach(function (res) {
                console.log("this is the deck2 ->", res)
                setDeck2(res.id)
            })
        }
        getDeck2();
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