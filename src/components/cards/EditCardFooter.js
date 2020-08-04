import React from 'react'
import { AddCardFoot, NextButton, DeleteButton } from './styles-cards/CardFormStyles'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../redux/actions'
import { Link, useHistory } from 'react-router-dom'


const EditCardFooter = ({ id, deckId }) => {
   const dispatch = useDispatch()
   const history = useHistory()

   const handleDelete = e => {
      e.preventDefault()
      dispatch(deleteCard(id))
      history.push(`/deck/${deckId}`)
   }

   return(
      <AddCardFoot>
         <div style={{ width: '50%' }}>
            <Link to='/dashboard'>
               <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </Link>
         </div>
         <div style={{ 
            width: '50%', 
            height: '80px',
            display: 'flex',
            aligItems: 'center',
            textAlign: 'center',  
         }}>
            <NextButton>Edit</NextButton>
         </div>
      </AddCardFoot>
   )
}

export default EditCardFooter