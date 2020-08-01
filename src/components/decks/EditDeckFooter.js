import React from 'react'
import { AddCardFoot, NextButton, AddCardBtn } from '../cards/styles-cards/CardFormStyles'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { editDeck } from '../../redux/actions'

const EditCardFooter = ({ deckToEdit }) => {
   const dispatch = useDispatch()

   const handleClick = e => {
      dispatch(editDeck(deckToEdit))
   }

   return(
      <AddCardFoot>
         <div style={{ width: '50%' }}>
            <Link to={`/deck/${deckToEdit.id}/create-card`}>
               <AddCardBtn onClick={handleClick}>
                  Add Card
               </AddCardBtn>
            </Link>
         </div>
         <div style={{ width: '50%' }}>
            <Link to={`/deck/${deckToEdit.id}/study`}>
               <NextButton onClick={handleClick}>
                  Study
               </NextButton>
            </Link>
         </div>
      </AddCardFoot>
   )
}

export default EditCardFooter