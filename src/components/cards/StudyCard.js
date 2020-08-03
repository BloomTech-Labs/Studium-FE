import React, { useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const cardStyle = {
   height: '397px',
   width: '340px',
   paddingTop: '80px',
   textAlign: 'center',
   background: '#FFFFFF',
   fontSize: '12px',
   textTransform: 'uppercase',
   borderRadius: '10px',
   paddingLeft: 0,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   border: '1px solid #C4C4C4',
}

const divStyle = {
   width: '340px',
   height: '41px',
   background: '#626262',
   margin: 0,
   borderBottomLeftRadius: '10px',
   borderBottomRightRadius: '10px',
   color: '#FFFFFF',
   display: 'flex',
   textAlign: 'center',
   justifyContent: 'center',
   alignItems: 'center'
}

const StudyCard = ({ displayedCard }) => {
   const [flipped, setflipped] = useState(false)

   const toggleFlip = () => {
      setflipped(!flipped)
   }

   return (
      <Flippy
         flipOnClick={true}
         flipDirection="horizontal"
         isFlipped={flipped}
      >
         <FrontSide style={cardStyle} className='flippy-front'>
            {displayedCard.card_front}
            <div style={divStyle} onClick={toggleFlip}>
               Click to see answer
            </div>
        </FrontSide>

         <BackSide style={cardStyle} className='flippy-back'>
            {displayedCard.card_back}
            <div style={divStyle} onClick={toggleFlip}>
               Click to see term
            </div>
         </BackSide>
      </Flippy>
   )
}

export default StudyCard