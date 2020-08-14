import React, { useState, useEffect } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { CardItself, CardFront } from './styles-decks/DeckViewStyles.js'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCardBeingEdited } from '../../redux/actions'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

const cardStyle = {
    background: '#FFFFFF',
    border: '1px solid #C4C4C4',
    borderRadius: '20px',
    width: '150px',
    height: '192px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2vh'
 }

const DeckCardView = ({ displayedCard }) => {
    const dispatch = useDispatch()
    const userDecks = useSelector(state => state.userDecks)
    const history = useHistory()

    const [deckId, setDeckId] = useState();
    const { card_front } = displayedCard

    useEffect(() => {
        const getDeckId = () => {
            userDecks.forEach(function (res) {
                setDeckId(res.id)
            })
        }
        getDeckId();
    }, [])

    const handleClick = () => {
        console.log('cardToEdit from the Flipper: ', displayedCard)
        dispatch(setCardBeingEdited(displayedCard))
        history.push(`/deck/${deckId}/card/${displayedCard.id}`)
     }

    return (
        <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
        >
            <FrontSide style={cardStyle} className='flippy-front'>
                <Link 
                    to={`/deck/${displayedCard.deck_id}/edit-card/${displayedCard.id}`}
                    style={{ textDecoration: 'none', color: 'grey', textAlign: 'right', paddingRight: '10px', marginTop: '10px', marginBottom: '6px' }}
                >
                    <div onClick={handleClick}>
                        <EditOutlinedIcon color='inherit'/>
                    </div>
                </Link>
                <div>
                    {displayedCard.card_front}
                </div>
            </FrontSide>
            
            <BackSide style={cardStyle} className='flippy-back'>
                <Link 
                    to={`/deck/${displayedCard.deck_id}/edit-card/${displayedCard.id}`}
                    style={{ textDecoration: 'none', color: 'grey', textAlign: 'right', paddingRight: '10px', marginTop: '10px', marginBottom: '6px' }}
                >
                    <div onClick={handleClick}>
                      <EditOutlinedIcon />
                    </div>
                </Link>
                <div>
                    {displayedCard.card_back}
                </div>
            </BackSide>
        </Flippy>
    )
}

export default DeckCardView