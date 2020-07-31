import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { editCard } from '../../redux/actions'
import { useParams, useHistory } from 'react-router-dom'
import { MainWrapper } from '../decks/styles-decks/DeckViewStyles'
import { InputWrapper, TextArea, AutoGen, Heading, ErrorMessage, TitleDisplay } from './styles-cards/CardFormStyles'
import NavBarDash from '../navigation/NavBarDash'
import EditCardFooter from './EditCardFooter'

const CreateCardForm = (props) => {
   const dispatch = useDispatch()
   const userDecks = useSelector(state => state.userDecks)
   const card = useSelector(state => state.cardBeingEdited)

   const history = useHistory()
   const { id, cardId } = useParams()

   const { register, handleSubmit, errors } = useForm()

   const [deckName, setDeckName] = useState();
   const [cardToEdit, setCardToEdit] = useState({
      card_front: card.card_front,
      card_back: card.card_back,
      deck_id: card.deck_id,
      id: cardId
   })

   useEffect(() => {
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
         }
      })
   }, [])

   const handleChange = e => {
		setCardToEdit({
         ...cardToEdit,
			[e.target.name]: e.target.value,
		});
   };

   const formSubmit = () => {
      console.log('wtf',cardToEdit)
      dispatch(editCard(cardToEdit))
      setCardToEdit({
         card_front: null,
         card_back: null,
         deck_id: id
      })
      if (cardToEdit.card_front !== null && cardToEdit.card_back !== null) {
         props.history.push(`/deck/${id}`)
      }
   }

   return (
      <MainWrapper>
         <NavBarDash />
         <form 
            onSubmit={handleSubmit(formSubmit)} 
            style={{ 
               margin: 'auto', 
               marginTop: '0',
               width: '335px'
            }}>
            <Heading style={{ marginTop: '30px' }}>
               Card
            </Heading>
            {/* <div style={{ textAlign: 'right'}}>
               <AutoGen>Auto generate</AutoGen>
               <input
                  type='checkbox' 
                  name='auto-generate'
               />
            </div> */}
            <InputWrapper>
               <label style={{ marginBottom: '6px', marginTop: '12px' }}>Term</label>
               <TextArea
                  name='card_front' 
                  value={cardToEdit.card_front}
                  onChange={handleChange}
                  ref={register({ required: true })} 
               />
               {errors.card_front && errors.card_front.type === 'required' && (
                  <ErrorMessage>* This field is required</ErrorMessage>
               )}
            </InputWrapper>
            <InputWrapper style={{ marginBottom: '163px' }}>
               <label style={{ marginBottom: '6px', marginTop: '12px'}}>Answer</label>
               <TextArea
                  name='card_back' 
                  value={cardToEdit.card_back}
                  onChange={handleChange}
                  ref={register({ required: true })} 
               />
               {errors.card_back && errors.card_back.type === 'required' && (
                  <ErrorMessage>* This field is required</ErrorMessage>
               )}
            </InputWrapper>
            <EditCardFooter id={id}/>
         </form>
      </MainWrapper>
   )
}

export default CreateCardForm