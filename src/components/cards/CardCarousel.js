import React from 'react'
import ReactCardCarousel from 'react-card-carousel'
import Card from '../cards/Card'

const CardCarousel = () => {
     return (
       <ReactCardCarousel autoplay={ false } autoplay_speed={ 2500 }>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
       </ReactCardCarousel>
     );
 }

 export default CardCarousel