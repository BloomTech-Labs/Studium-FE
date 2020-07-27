import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { MainWrapper, CardItself, CardFront } from '../decks/styles-decks/DeckViewStyles.js'
import NavbarDash from '../navigation/NavBarDash.js'


const IndCardView = () => {

    console.log("Hello from IndCardView!")

    const userDecks = useSelector(state => state.userDecks)
    const [deckId, setDeckId] = useState();
    const [cards, setCards] = useState([])
    const [cardId, setCardId] = useState();

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
        <MainWrapper>
            <NavbarDash />
            <h1>Hello from IndCardView!</h1>
        </MainWrapper>

    )
}

export default IndCardView