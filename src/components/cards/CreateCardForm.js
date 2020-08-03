import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { postNewCard, autoGenerate, clearAutoGenRes } from '../../redux/actions'
import { useParams, useHistory } from 'react-router-dom'
import { MainWrapper } from '../decks/styles-decks/DeckViewStyles'
import { InputWrapper, TextArea, AutoGen, Heading, ErrorMessage, TitleDisplay } from './styles-cards/CardFormStyles'
import AddCardNav from '../navigation/AddCardNav'
import AddCardFooter from './AddCardFooter'

const CreateCardForm = (props) => {
   const dispatch = useDispatch()
   const history = useHistory()
   const userDecks = useSelector(state => state.userDecks)
   const autoGenRes = useSelector(state => state.autoGenRes)
   const { id } = useParams()
   const { register, handleSubmit, errors } = useForm()

   const [deckName, setDeckName] = useState()
   const [isChecked, setIsChecked] = useState(false)
   const [cardToPost, setCardToPost] = useState({
      card_front: null,
      card_back: null,
      deck_id: id
   })

   useEffect(() => {
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
         }
      })
   }, [])

   const handleChange = e => {
		setCardToPost({
         ...cardToPost,
			[e.target.name]: e.target.value,
		});
   };

   const handleCheckbox = e => {
      setIsChecked(!isChecked)
      dispatch(clearAutoGenRes())
   }

   const handleAutoGen = e => {
      dispatch(autoGenerate(cardToPost.card_front))
   }

   const formSubmit = () => {
      console.log('wtf',cardToPost)
      dispatch(postNewCard(cardToPost))
      setCardToPost({
         card_front: null,
         card_back: null,
         deck_id: id
      })
      if (cardToPost.card_front !== null && cardToPost.card_back !== null) {
         props.history.push(`/deck/${id}`)
      }
   }

   return (
      <MainWrapper>
         <AddCardNav />
         <form 
            onSubmit={handleSubmit(formSubmit)} 
            style={{ 
               margin: 'auto', 
               marginTop: '0',
               width: '335px'
            }}>
            <InputWrapper>
               <Heading style={{ marginTop: '34px', marginBottom: '8px' }}>Title</Heading>
               <TitleDisplay
                  value={deckName}
               />
            </InputWrapper>
            <Heading style={{ marginTop: '25px' }}>
               Card
            </Heading>
            <div style={{ textAlign: 'right'}}>
               <AutoGen>Auto generate</AutoGen>
               <input
                  type='checkbox' 
                  name='auto-generate'
                  onClick={handleCheckbox}
               />
            </div>
            <InputWrapper>
               <label style={{ marginBottom: '6px'}}>
                  Term
               </label>
               {isChecked === false
                  ?  <TextArea
                        name='card_front' 
                        value={cardToPost.card_front}
                        onChange={handleChange}
                        ref={register({ required: true })} 
                     />
                  
                  :   <TextArea
                        name='card_front' 
                        value={cardToPost.card_front}
                        onChange={handleChange}
                        onKeyDown={handleAutoGen}
                        ref={register({ required: true })} 
                     />
               }
               
               {errors.card_front && errors.card_front.type === 'required' && (
                  <ErrorMessage>* This field is required</ErrorMessage>
               )}
            </InputWrapper>
            <InputWrapper style={{ marginBottom: '61px' }}>
               <label style={{ marginBottom: '6px', marginTop: '12px'}}>
                  Answer
               </label>
               {isChecked === false
                  ? <TextArea
                        name='card_back' 
                        value={cardToPost.card_back}
                        onChange={handleChange}
                        ref={register({ required: true })} 
                     />

                  : <TextArea
                        name='card_back' 
                        value={
                           Object.keys(autoGenRes).length > 0
                              ?  `${Object.keys(autoGenRes)[0]}`
                              :  `${autoGenRes}`
                        }
                        onChange={handleChange}
                        ref={register({ required: true })} 
                     />
               }
               {errors.card_back && errors.card_back.type === 'required' && (
                  <ErrorMessage>* This field is required</ErrorMessage>
               )}
            </InputWrapper>
            <AddCardFooter id={id}/>
         </form>
      </MainWrapper>
   )
}

export default CreateCardForm