import React, { useState } from 'react'
import NavbarDash from '../navigation/NavBarDash'
import VisTest from '../visualizations/VisTest'
import { 
   StatsViewWrapper, 
   DeckTitle, 
   ImgDiv,
   DropDownMenu,
   MenuItem,
   MetricsWrapper,
   StatsItem,
   MetricSquare,
   MetricValues,
   MVtop,
   MVbottom,
   MetricChanges 
} from './styles-decks/DeckMetricsStyles'

const DeckMetrics = () => {
   const [selection, setSelection] = useState(1)

   const handleChange = (value) => {
      setSelection(value)
   }

   const pageControl = () => {
      if(selection == 1){
         return (
           <div>Hello</div>
         );
       } else if(selection == 2) {
         return (
           <div>Hola</div>
         );
       } else if(selection == 3) {
         return (
           <div>Bonjour</div>
         );
       }
   }

   console.log('selection:', selection)

   return (
      <div>
         <NavbarDash />
         <StatsViewWrapper>
            <DeckTitle>
               Algebra
            </DeckTitle>
            <ImgDiv>
               <img source='../../images/ink-layer.jpg' alt='studius young lady' />
            </ImgDiv>
            <DropDownMenu
               value={selection}
               onChange={handleChange}
            >
               <MenuItem value={1}>Daily</MenuItem>
               <MenuItem value={2}>Weekly</MenuItem>
               <MenuItem value={3}>Monthly</MenuItem>
            </DropDownMenu>
            <MetricsWrapper>
               <StatsItem>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <MetricSquare style={{ backgroundColor: '#FF909A' }} />
                     <MetricValues>
                        <MVtop>15</MVtop>
                        <MVbottom>Cards Per Minute</MVbottom>
                     </MetricValues>
                  </div>
                  <MetricChanges>33%++</MetricChanges>
               </StatsItem>
               <StatsItem>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <MetricSquare style={{ backgroundColor: '#C8F5FF' }} />
                     <MetricValues>
                        <MVtop>8/10</MVtop>
                        <MVbottom>Cards viewed</MVbottom>
                     </MetricValues>
                  </div>
                  <MetricChanges>33%++</MetricChanges>
               </StatsItem>
               <StatsItem>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <MetricSquare style={{ backgroundColor: '#EFC9ED' }} />
                     <MetricValues>
                        <MVtop>Best Study Session</MVtop>
                        <MVbottom>3 hours</MVbottom>
                     </MetricValues>
                  </div>
                  <MetricChanges>33%++</MetricChanges>
               </StatsItem>
               <StatsItem>
                  <VisTest />
                  {/* <MetricValues>
                     <div></div>
                     <div></div>
                  </MetricValues>
                  <div></div>
                  <div></div> */}
               </StatsItem>
            </MetricsWrapper>
         </StatsViewWrapper>
      </div>
   )
}

export default DeckMetrics