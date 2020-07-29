import React, { useState } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { useDispatch } from 'react-redux'
import { postNewCard } from '../../redux/actions'
import { useParams } from 'react-router-dom'

const CreateCardForm = () => {
   const dispatch = useDispatch()
   const { deckId } = useParams()

   const [cardToPost, setCardToPost] = useState({
      card_front: '',
      card_back: '',
      deck_id: deckId
   })

   const handleChange = e => {
		setCardToPost({
			...cardToPost,
			[e.target.name]: e.target.value,
		});
   };
   
   const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewCard(cardToPost));
		setCardToPost({
			card_front: '',
         card_back: '',
         deck_id: deckId
		});
	};

   return (
      <AvForm onSubmit={handleSubmit}>
         <AvField
            label='Card Front'
            type='text-area'
            name='cardFront'
            value={cardToPost.card_front}
            onChange={handleChange}
            validate={{
               required : {
                  value: true,
                  errorMessage: 'This input is required'
               }
            }} />
         <AvField
            label='Card Back'
            type='text-area'
            name='cardBack'
            value={cardToPost.card_back}
            onChange={handleChange}
            validate={{
               required : {
                  value: true,
                  errorMessage: 'This input is required'
               }
            }} />
      </AvForm>
   )
}

export default CreateCardForm