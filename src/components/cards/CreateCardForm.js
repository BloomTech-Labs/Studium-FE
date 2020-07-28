import React, { useState } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { useDispatch } from 'react-redux'

const CreateCardForm = () => {
   const dispatch = useDispatch()

   const [cardToPost, setCardToPost] = useState({
      card_front: '',
      card_back: ''
   })

   const handleChange = e => {
		setCardToPost({
			...cardToPost,
			[e.target.name]: e.target.value,
		});
   };
   
   const handleSubmit = e => {
		e.preventDefault();
		dispatch(postNewCard(cardToPost, props));
		setSCardToPost({
			card_front: '',
         card_back: ''
		});
	};

   return (
      <AvForm onSubmit={handleSubmit}>
         <AvField
            label='Card Front'
            type='text'
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
            type='text'
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