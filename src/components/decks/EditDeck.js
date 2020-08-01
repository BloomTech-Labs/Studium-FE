import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { editDeck, setCardBeingEdited, resetUserDecks } from '../../redux/actions'
import { useParams, useHistory } from 'react-router-dom'
import { MainWrapper } from '../decks/styles-decks/DeckViewStyles'
import { InputWrapper, TextArea, AutoGen, Heading, ErrorMessage, TitleDisplay } from '../cards/styles-cards/CardFormStyles'
import EditDeckCard from '../cards/EditDeckCard'
import NavBarDash from '../navigation/NavBarDash'
import EditDeckFooter from './EditDeckFooter'
import { ImgIconWrapper } from '../cards/styles-cards/EditDeckCardStyles'
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined'

const EditDeck = (props) => {
   const dispatch = useDispatch()
   const cards = useSelector(state => state.deckCards)
   const deck = useSelector(state => state.deckBeingEdited)

   const history = useHistory()
   const { id } = useParams()

   const { register, handleSubmit, errors } = useForm()

   const [deckName, setDeckName] = useState();
   const [deckToEdit, setDeckToEdit] = useState(deck)
   const [cardToEdit, setCardToEdit] = useState({
      card_front: '',
      card_back: '',
      deck_id: '',
      id: ''
   })

   useEffect(() => {
      setDeckName(deck.deck_name)
   }, [])

   const handleChange = e => {
		setDeckToEdit({
         ...deckToEdit,
			[e.target.name]: e.target.value,
		});
   };

   const formSubmit = () => {
      console.log('wtf',deckToEdit)
      dispatch(editDeck(deckToEdit))
      // dispatch(resetUserDecks(deckToEdit.user_id))
      setDeckToEdit({})
      // if (cardToEdit.card_front !== null && cardToEdit.card_back !== null) {
      //    props.history.push(`/deck/${id}`)
      // }
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
            <InputWrapper>
               <Heading style={{ marginTop: '30px' }}>
                  Edit Cover
               </Heading>
               <ImgIconWrapper>
                  <PanoramaOutlinedIcon color='disabled' style={{ fontSize: 70}} />
               </ImgIconWrapper>
               <Heading style={{ marginTop: '21px', marginBottom: '8px' }}>
                  Title
               </Heading>
               <TitleDisplay
                  style={{ boxSizing: 'boeder-box', paddingLeft: '11px'}}
                  name='deck_name'
                  value={deckToEdit.deck_name}
                  onChange={handleChange}
               />
               <Heading style={{ marginTop: '30px' }}>
                  Cards
               </Heading>
               <div style={{ marginBottom: '56px' }}>
                  {cards.map(card => {
                     return (
                        <EditDeckCard 
                           key={card.id} 
                           displayedCard={card}
                        />
                     )
                  })}
               </div>
            </InputWrapper>
            <EditDeckFooter deckToEdit={deckToEdit}/>
         </form>
      </MainWrapper>
   )
}

export default EditDeck