import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { useParams, useHistory } from 'react-router-dom'
import { MainWrapper, BigCard, CardTop, CardBottom, Ruler, FooterWrapper, EditButton } from '../decks/styles-decks/DeckViewStyles.js'
import NavbarDash from '../navigation/NavBarDash.js'
import { setCardBeingEdited } from '../../redux/actions'


const IndCardView = (props) => {

    let { id, cardId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [card, setCard] = useState({})
    const [cardToEdit, setCardToEdit] = useState({})

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

    const handleClick = () => {
        console.log('cradToEdit', card)
        dispatch(setCardBeingEdited(card))
        props.history.push(`/deck/${id}/edit-card/${cardId}`)
    }

    return (
        <MainWrapper>
            <NavbarDash />
            <BigCard>
                <CardTop>{card_front}</CardTop>
                <Ruler />
                <CardBottom>{card_back}</CardBottom>
            </BigCard>
            <FooterWrapper>
                <EditButton onClick={handleClick}>Edit Card</EditButton>
            </FooterWrapper>
        </MainWrapper>

    )
}

export default IndCardView