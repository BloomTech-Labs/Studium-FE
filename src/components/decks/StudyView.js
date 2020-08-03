import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import NavBarDash from '../navigation/NavBarDash'
import StudyCard from '../cards/StudyCard'
import { DeckName, Term, ToolBarWrapper, ArrowsWrapper } from './styles-decks/StudyViewStyles'
import { DoneButton } from './styles-decks/StudyViewStyles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StudyView = () => {
   const cards = useSelector(state => state.deckCards)
   const userDecks = useSelector(state => state.userDecks)

   const { id } = useParams()

   const [deckName, setDeckName] = useState('')
   const [displayedCard, setDisplayedCard] = useState(0)
   const [i, setI] = useState(0)

   useEffect(() => {
      setDisplayedCard(
         cards[i]
      )
      console.log('from useEffect', displayedCard)
      userDecks.map(deck => {
         if (parseInt(deck.id) === parseInt(id)) {
            setDeckName(deck.deck_name)
         }
      })
   }, [])

   const nextCard = () => {
      if(i === (cards.length - 1)){
         setI(0)
         setDisplayedCard(cards[i])
      }else{
         setI(i + 1)
         setDisplayedCard(cards[i])
      }
   }

   const prevCard = () => {
      if(i === (0)){
         setI(cards.length - 1)
         setDisplayedCard(cards[i])
      }else{
         setI(i - 1)
         setDisplayedCard(cards[i])
      }  
   }
   console.log(displayedCard)
   console.log(cards)

   return ( 
      <div>
         <NavBarDash />
         <DeckName>{deckName}</DeckName>
         <ToolBarWrapper>
            <Term>Term</Term>
            <div style={{ 
               width: '60px', 
               display: 'flex', 
               justifyContent: 'space-between'}}>
               <EditOutlinedIcon />
               <StarBorderOutlinedIcon />
            </div>
         </ToolBarWrapper>
         <div style={{ width: '340px', margin: 'auto' }}>
            <StudyCard displayedCard={displayedCard}/>
         </div>
         <ArrowsWrapper>
            <ArrowBackIcon onClick={prevCard}/>
            <div>
               {i +1}/{cards.length}
            </div>
            <ArrowForwardIcon onClick={nextCard}/>
         </ArrowsWrapper>
         <Link to={`/deck/${displayedCard.deck_id}`}>
            <DoneButton>Done Studying</DoneButton>
         </Link>
         
      </div>
   )
}

export default StudyView
