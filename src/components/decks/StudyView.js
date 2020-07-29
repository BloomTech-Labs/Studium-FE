import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import NavBarDash from '../navigation/NavBarDash'
import CardCarousel from '../cards/CardCarousel'
import StudyCard from '../cards/StudyCard'
import { DeckName, Term, ToolBarWrapper, ArrowsWrapper } from './styles-decks/StudyViewStyles'
import { DoneButton } from './styles-decks/StudyViewStyles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StudyView = () => {
   const cards = useSelector(state => state.deckCards)

   const [displayedCard, setDisplayedCard] = useState(0)

   useEffect(() => {
      setDisplayedCard(
         cards[0]
      )
   }, [])

   const nextCard = () => {
      setDisplayedCard(prev => {
        if (prev === cards.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    };

    const prevCard = () => {
      setDisplayedCard(prev => {
         if (prev === 0) {
           return cards.length - 1;
         } else {
           return prev + 1;
         }
       });
    }

   return (
      <div>
         <NavBarDash />
         <DeckName>DeckName</DeckName>
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
            {/* <CardCarousel /> */}
         </div>
         <ArrowsWrapper>
            <ArrowBackIcon onClick={prevCard}/>
            <div>
               1/3
            </div>
            <ArrowForwardIcon onClick={nextCard}/>
         </ArrowsWrapper>
         <DoneButton>Done Studying</DoneButton>
      </div>
   )
}

export default StudyView
