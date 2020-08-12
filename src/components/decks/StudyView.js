import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import NavBarDash from '../navigation/NavBarDash'
import StudyCard from '../cards/StudyCard'
import { DeckName, Term, ToolBarWrapper, ArrowsWrapper } from './styles-decks/StudyViewStyles'
import { DoneButton } from './styles-decks/StudyViewStyles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import StarIcon from '@material-ui/icons/Star'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import AxiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
import { setCurrentSession, postNewSession, editCard } from '../../redux/actions'

const StudyView = () => {
   const dispatch = useDispatch()

   const cards = useSelector(state => state.deckCards)
   const userDecks = useSelector(state => state.userDecks)
   const currentSession = useSelector(state => state.currentSession)

   const { id } = useParams()
   const [deckName, setDeckName] = useState('')
   const [displayedCard, setDisplayedCard] = useState(0)
   const [i, setI] = useState(0)
   const [totalLookedAt, setTotalLookedAt] = useState([])
   const [session, setSession] = useState(currentSession)
   const [isStarred, setIsStarred] = useState(false)

   useEffect(() => {
      setDisplayedCard(
         cards[i]
      )
      userDecks.map(deck => {
         if (deck.id === id) {
            setDeckName(deck.deck_name)
         }
      })
      
   }, [])

   useEffect (() => {
      setTotalLookedAt([
         ...totalLookedAt,
         displayedCard
      ])
   }, [displayedCard])

   const nextCard = () => {
      if(i === (cards.length - 1)){
         setI(0)
         setDisplayedCard(cards[i])
      }else{
         setI(i + 1)
         setDisplayedCard(cards[i])
      }
      const lookedAtArray = totalLookedAt.filter(card => card.id !== displayedCard.id)
      setTotalLookedAt([
         ...lookedAtArray,
         displayedCard
      ])
   }

   const prevCard = () => {
      if(i === (0)){
         setI(cards.length - 1)
         setDisplayedCard(cards[i])
      }else{
         setI(i - 1)
         setDisplayedCard(cards[i])
      }
      const lookedAtArray = totalLookedAt.filter(card => card.id !== displayedCard.id)
      setTotalLookedAt([
         ...lookedAtArray,
         displayedCard
      ])  
   }

   const fireLeitner = () => {
      const fixedLookedAtArr = totalLookedAt.slice(1)
      const leitnerArr = fixedLookedAtArr.map(card => {
         return {
            card_id: card.id,
            isStarred: card.is_starred,
            comfortLevel: card.comfort_level
         }
      })
      console.log('leitnerArr:', leitnerArr)
      axios
         .post('https://studium-ds.herokuapp.com/leitner', leitnerArr)
         .then(res => {
            console.log('res.data:', res.data)
         })
         .catch(err => console.log('leitnerErr:', err))
   }

   const doneStudying = () => {
      // const seshEnd = BigInt(Date.now())
      const updatedSesh = {
         ...session,
         total_looked_at: parseInt(totalLookedAt.length - 1),
         session_end: Date.now()
      }
      fireLeitner()
      console.log('updatedSesh:', updatedSesh)
      dispatch(postNewSession(updatedSesh))
   }

   const toggelStarred = () => {
      // setIsStarred(!isStarred)
      const cardToEdit = {
         ...displayedCard,
         is_starred: !displayedCard.is_starred
      }
      setDisplayedCard(cardToEdit)
      dispatch(editCard(cardToEdit))
   }

   console.log('totalLookedAt:', totalLookedAt)
   console.log('session:', session)
   console.log('displayedCard:', displayedCard)

   return ( 
      <div>
         <NavBarDash />
         <DeckName>{deckName}</DeckName>
         <ToolBarWrapper style={{ width: '340px', margin: 'auto', marginBottom: '6px' }}>
            <Term>Term</Term>
            <div style={{ 
               width: '60px', 
               display: 'flex', 
               justifyContent: 'space-between'}}>
               <EditOutlinedIcon />
               <div onClick={toggelStarred}>
                  {displayedCard.is_starred === false
                     ?  <StarBorderOutlinedIcon />
                     :  <StarIcon color='secondary' />
                  }
               </div>
            </div>
         </ToolBarWrapper>
         <div style={{ width: '340px', margin: 'auto' }}>
            <StudyCard 
               displayedCard={displayedCard}
               totalLookedAt={totalLookedAt}
               setTotalLookedAt={setTotalLookedAt}
               isStarred={isStarred}
               seetIsStarred={setIsStarred} 
            />
         </div>
         <ArrowsWrapper>
            <ArrowBackIcon onClick={prevCard}/>
            <div>
               {i +1}/{cards.length}
            </div>
            <ArrowForwardIcon onClick={nextCard}/>
         </ArrowsWrapper>
         <Link to={`/deck/${displayedCard.deck_id}`}>
            <DoneButton onClick={doneStudying}>Done Studying</DoneButton>
         </Link>
      </div>
   )
}

export default StudyView
