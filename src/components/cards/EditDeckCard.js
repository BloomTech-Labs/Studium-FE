import React, { useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { useDispatch } from 'react-redux'
import { setCardBeingEdited } from '../../redux/actions'
import { Link } from 'react-router-dom'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const cardStyle = {
   width: '335px',
   height: '98px',
   paddingTop: '10px',
   paddingLeft: '11px',
   paddingRight: '11px',
   marginTop: '9px',
   background: '#FFFFFF',
   border: '1px solid #C4C4C4',
   boxSizing: 'border-box',
   borderRadius: '6px',
   border: '1px solid #C4C4C4',
   fontFamily: 'Source Sans Pro',
   fontStyle: 'normal',
   fontWeight: 'normal',
   fontSize: '18px',
   lineHeight: '23px',
   display: 'flex',
   justifyContent: 'space-between'
}

const EditDeckCard = ({ displayedCard }) => {
   const dispatch = useDispatch()
   
   const handleClick = () => {
      console.log('cardToEdit from the Flipper: ', displayedCard)
      dispatch(setCardBeingEdited(displayedCard))
   }
   
   return (
      <Flippy
         flipOnClick={true}
         flipDirection="vertical"
      >
         <FrontSide style={cardStyle} className='flippy-front'>
            <div style={{ 
               height: '75px',
               width: '278px'
            }}>
               {displayedCard.card_front}
            </div>
            <Link 
               to={`/deck/${displayedCard.deck_id}/edit-card/${displayedCard.id}`}
               style={{ textDecoration: 'none', color: 'grey' }}
            >
               <div onClick={handleClick}>
                  <EditOutlinedIcon color='inherit'/>
               </div>
            </Link>
         </FrontSide>
         <BackSide style={cardStyle} className='flippy-back'>
            <div style={{ 
               height: '75px',
               width: '278px'
            }}>
               {displayedCard.card_back}
            </div>
            <Link 
               to={`/deck/${displayedCard.deck_id}/edit-card/${displayedCard.id}`}
               style={{ textDecoration: 'none', color: 'grey' }}
            >
               <div onClick={handleClick}>
                  <EditOutlinedIcon />
               </div>
            </Link>
         </BackSide>
      </Flippy>
   )
}

export default EditDeckCard