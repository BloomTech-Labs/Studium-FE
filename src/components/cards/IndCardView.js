import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { MainWrapper, BigCard, CardTop, CardBottom, Ruler, FooterWrapper, EditButton } from '../decks/styles-decks/DeckViewStyles.js'
import NavbarDash from '../navigation/NavBarDash.js'
import { useParams } from 'react-router-dom'


const IndCardView = () => {

    let { cardId } = useParams()
    const [card, setCard] = useState({})

    useEffect(() => {
        const getCard = () => {
            AxiosWithAuth()
                .get(`/cards/${cardId}`)
                .then(res => {
                    setCard(res.data[0])
                })
                .catch(err => {
                    console.log('There was an error retrieving the card in question', err)
                })
        }
        getCard()
    }, [cardId])

    const { card_front, card_back, card_img, notes } = card;



    return (
        <MainWrapper>
            <NavbarDash />
            <BigCard>
                <CardTop>{card_front}</CardTop>
                <Ruler />
                <CardBottom>{card_back}</CardBottom>
            </BigCard>
            <FooterWrapper>
                <EditButton>Edit Card</EditButton>
            </FooterWrapper>
        </MainWrapper>

    )
}

export default IndCardView