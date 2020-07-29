import React from 'react'
import ReactCardCarousel from 'react-card-carousel'
import StudyCard from './StudyCard'

const CardCarousel = () => {
   return (
      <ReactCardCarousel autoplay={ false } autoplay_speed={ 2500 }>
         <StudyCard/>
         <StudyCard/>
         <StudyCard/>
         <StudyCard/>
      </ReactCardCarousel>
   );
 }

 export default CardCarousel