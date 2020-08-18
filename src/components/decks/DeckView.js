import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavbarDash from '../navigation/NavBarDash.js'
import DeckViewCards from './DeckViewCards.js'
import { useParams, Link } from 'react-router-dom'
import { setDeckBeingEdited, setCurrentSession, getDeckSessions } from '../../redux/actions'
import AxiosWithAuth from '../../utils/axiosWithAuth'

import { MainWrapper, H1, H2, NamesWrapper, FooterWrapper, EditButton, StudyButton } from './styles-decks/DeckViewStyles.js'

const DeckView = ({ match, location }) => {
   const dispatch = useDispatch()
   const userDecks = useSelector(state => state.userDecks)
   const deckSessions = useSelector(state => state.deckSessions)
   const [deckName, setDeckName] = useState()
   const [deckToEdit, setDeckToEdit] = useState()
   const [sessionToPost, setSessionToPost] = useState({
      deck_id: '',
      user_id: '',
      total_looked_at: '',
      session_start: '',
      session_end: ''
   })

   const { id } = useParams()

   useEffect(() => {
      userDecks.map(deck => {
         if (deck.id === id) {
            setDeckName(deck.deck_name)
            setDeckToEdit(deck)
            setSessionToPost({
               ...sessionToPost,
               deck_id: deck.id,
               user_id: deck.user_id,
            })
         }
      })
      dispatch(getDeckSessions(id))
   }, [])

   const handleEditClick = () => {
      console.log('deckToEdit-->', deckToEdit)
      dispatch(setDeckBeingEdited(deckToEdit))
  }

   const handleStudyMousedown = () => {
      setSessionToPost({
         ...sessionToPost,
         total_looked_at: '',
         session_start: Date.now(),
         session_end: ''
      })
   }

   const handleStudyMouseUp = () => {
      dispatch(setCurrentSession(sessionToPost))
   }

   const getMetrics = () => {
      const sessionData = deckSessions.map(session => {
         return {
            id: session.id,
            total_looked_at: session.total_looked_at,
            session_start: parseInt(session.session_start),
            session_end: parseInt(session.session_end)
         }
      })
      console.log('sessionData-->', sessionData)
      AxiosWithAuth()
         .post('https://studium-ds.herokuapp.com/metrics', sessionData)
         .then(res => console.log('metricsResponse-->', res))
         .catch(err => console.log('metricsError-->', err))
   }

   return (
      <MainWrapper>
         <NavbarDash />
         <NamesWrapper>
            <H1>{deckName}</H1>
            <H2>Cards</H2>
         </NamesWrapper>
         <DeckViewCards />
         <FooterWrapper>
            <Link to={`/deck/${id}/edit-deck`}>
               <EditButton onClick={handleEditClick}>Edit Deck</EditButton>
            </Link>
            <button onClick={getMetrics}>Try Metrics GET</button>
            <Link to={`/deck/${id}/study`}>
               <StudyButton 
                  onMouseDown={handleStudyMousedown}
                  onMouseUp={handleStudyMouseUp}
               >
                     Study
               </StudyButton>
            </Link>
            
         </FooterWrapper>
      </MainWrapper>
   )
}

export default DeckView