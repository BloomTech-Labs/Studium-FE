import React from 'react'
import { AddCardFoot, NextButton } from './styles-cards/CardFormStyles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AddCardFooter = ({ id }) => {

   return(
      <AddCardFoot>
         <div style={{ width: '50%' }}></div>
         <div style={{ 
            width: '50%', 
            height: '80px',
            display: 'flex',
            aligItems: 'center',
            textAlign: 'center',  
         }}>
            <NextButton>Next</NextButton>
         </div>
      </AddCardFoot>
   )
}

export default AddCardFooter