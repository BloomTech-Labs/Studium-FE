import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { postNewSession, editCard } from '../../redux/actions'
import { DeckName, Term, ToolBarWrapper, ArrowsWrapper } from './styles-decks/StudyViewStyles'
import { DoneButton } from './styles-decks/StudyViewStyles'
import NavBarDash from '../navigation/NavBarDash'
import StudyCard from '../cards/StudyCard'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import StarIcon from '@material-ui/icons/Star'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Tooltip } from '@material-ui/core'
import axios from 'axios'
import moment from 'moment'

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

   const studyArr = cards.filter(card => (parseInt(card.next_due) <= moment(Date.now()).utc()) || (card.next_due === null))
   
   console.log('TIME:', Date.now())
   console.log('studyArr-->', studyArr)

   useEffect(() => {
      setDisplayedCard(
         studyArr[i]
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
      if(i === (studyArr.length - 1)){
         setI(0)
         setDisplayedCard(studyArr[i])
      }else{
         setI(i + 1)
         setDisplayedCard(studyArr[i])
      }
      const lookedAtArray = totalLookedAt.filter(card => card.id !== displayedCard.id)
      setTotalLookedAt([
         ...lookedAtArray,
         displayedCard
      ])
   }

   const prevCard = () => {
      if(i === (0)){
         setI(studyArr.length - 1)
         setDisplayedCard(studyArr[i])
      }else{
         setI(i - 1)
         setDisplayedCard(studyArr[i])
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
            id: card.id,
            is_starred: card.is_starred,
            comfort_level: card.comfort_level
         }
      })
      console.log('leitnerArr:', leitnerArr)
      axios
         .post('https://studium-ds.herokuapp.com/leitner', leitnerArr)
         .then(res => {
            console.log('res.data:', res.data)
            res.data.map(card => {
               card.next_due = moment(card.next_due, "MM-DD-YYYY hh:mm").valueOf()
               console.log(card.next_due)
               dispatch(editCard(card))
            })
         })
         .catch(err => console.log('leitnerErr:', err))
   }

   const doneStudying = () => {
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
      const cardToEdit = {
         ...displayedCard,
         is_starred: !displayedCard.is_starred
      }
      setDisplayedCard(cardToEdit)
      dispatch(editCard(cardToEdit))
   }
   
   return ( 
      <div>
         <NavBarDash />
         <DeckName>{deckName}</DeckName>
         {studyArr.length > 0
            ?  <div>
                  <ToolBarWrapper style={{ width: '340px', margin: 'auto', marginBottom: '6px' }}>
                     <Term>Term</Term>
                     <div style={{ 
                        width: '60px', 
                        display: 'flex', 
                        justifyContent: 'space-between'
                     }}>
                        <EditOutlinedIcon />
                           <div onClick={toggelStarred}>
                              {displayedCard.is_starred === false
                                 ?  <Tooltip
                                       title='Highlight card for review'
                                       arrow
                                    >
                                       <StarBorderOutlinedIcon />
                                    </Tooltip>
                                 :  <Tooltip
                                       title='If mastered, un-highlight card'
                                       arrow
                                    >
                                       <StarIcon color='secondary' />
                                    </Tooltip>
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
                        {i +1}/{studyArr.length}
                     </div>
                     <ArrowForwardIcon onClick={nextCard}/>
                  </ArrowsWrapper>
                  <Link to={`/deck/${displayedCard.deck_id}`}>
                     <DoneButton onClick={doneStudying}>Done Studying</DoneButton>
                  </Link>
               </div>
            :  <div style={{ marginTop: '50px' }}>There are no cards due for study in this deck.</div>
         }
      </div>
   )
}

export default StudyView