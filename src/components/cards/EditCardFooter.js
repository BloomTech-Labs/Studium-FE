import React from 'react'
import { AddCardFoot, NextButton, DeleteButton } from './styles-cards/CardFormStyles'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../redux/actions'
import { Link } from 'react-router-dom'


const EditCardFooter = ({ id }) => {
   const dispatch = useDispatch()

   const handleDelete = e => {
      e.preventDefault()
      dispatch(deleteCard(id))
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