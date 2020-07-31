import React, { useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { CardInput } from './styles-cards/EditDeckCardStyles'

const cardStyle = {
   width: '335px',
   height: '98px',
   paddingTop: '10px',
   paddingLeft: '11px',
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
}

const EditDeckCard = ({ displayedCard, editInput }) => {

   return (
      <form>
         <Flippy
            flipOnClick={true}
            flipDirection="vertical"
         >
            <FrontSide style={cardStyle} className='flippy-front'>
               <CardInput
                  value={displayedCard.card_front}
                  onChange={editInput}
               />
           </FrontSide>

            <BackSide style={cardStyle} className='flippy-back'>
            <CardInput
                  value={displayedCard.card_back}
                  onChange={editInput}
               />
            </BackSide>
         </Flippy>
      </form>
   )
}

export default EditDeckCard