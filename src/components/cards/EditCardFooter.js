import React from 'react'
import { AddCardFoot, NextButton } from './styles-cards/CardFormStyles'

const EditCardFooter = ({ id }) => {

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
            <NextButton>Done</NextButton>
         </div>
      </AddCardFoot>
   )
}

export default EditCardFooter