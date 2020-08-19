import React, { useState, useEffect } from 'react'
import NavbarDash from '../navigation/NavBarDash'
import VisTest from '../visualizations/VisTest'
import StudyImg from '../../images/ink-layer.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDeckSessions } from '../../redux/actions'
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
   const userDecks = useSelector(state => state.userDecks)
   const deckSessions = useSelector(state => state.deckSessions)
   const metrics = useSelector(state => state.metrics)
   const dispatch = useDispatch()

   const [selection, setSelection] = useState('Daily')
   const [deckName, setDeckName] = useState('')
   const [statsData, setStatsData] =  useState([])
   const [isLoading, setIsLoading] = useState(true)

   const { id } = useParams()

   useEffect(() => {
      userDecks.map(deck => {
         if (deck.id === id) {
            setDeckName(deck.deck_name)
         }
      })
      dispatch(getDeckSessions(id))
   }, [])

   const handleChange = e => {
      e.preventDefault()
      setSelection(e.target.value)
   }

   const cardsPerMin = (metrics) => {
      if (selection === 'Daily') {
         return <div>{metrics[0].daily_cards_min.toFixed(2)}</div>
      } else if (selection === 'Weekly') {
         return <div>{metrics[1].weekly_cards_min.toFixed(2)}</div>
      } else if (selection === 'Monthly') {
         return <div>{metrics[2].monthly_cards_min.toFixed(2)}</div>
      }
   }

   const bestSesh = (metrics) => {
      if (selection === 'Daily') {
         return <div>{((metrics[3].best_session_daily)*60).toFixed(2)} minutes</div>
      } else if (selection === 'Weekly') {
         return <div>{((metrics[4].best_session_weekly)*60).toFixed(2)} minutes</div>
      } else if (selection === 'Monthly') {
         return <div>{((metrics[5].best_session_monthly)*60).toFixed(2)} minutes</div>
      }
   }

   const cardsPerMinDiff = metrics => {
      if (selection === 'Daily') {
         return (
            <div style={{ color: `#${metrics[0].color_code}`}}>
               {`${metrics[0].difference.toFixed(2)}% ${metrics[0].unicode}`}
            </div>
         )
      }  else if (selection === 'Weekly') {
            return (
               <div style={{ color: `#${metrics[1].color_code}`}}>
                  {`${metrics[1].difference.toFixed(2)}% ${metrics[1].unicode}`}
               </div>
            )
         } else if (selection === 'Monthly') {
            return (
               <div style={{ color: `#${metrics[2].color_code}`}}>
                  {`${metrics[2].difference.toFixed(2)}% ${metrics[2].unicode}`}
               </div>
            )
         }
   }

   const bestSeshDiff = metrics => {
      if (selection === 'Daily') {
         return (
            <div style={{ color: `#${metrics[3].color_code}`}}>
               {`${metrics[3].difference.toFixed(2)}% ${metrics[3].unicode}`}
            </div>
         )
      }  else if (selection === 'Weekly') {
            return (
               <div style={{ color: `#${metrics[4].color_code}`}}>
                  {`${metrics[4].difference.toFixed(2)}% ${metrics[4].unicode}`}
               </div>
            )
         }  else if (selection === 'Monthly') {
               return (
                  <div style={{ color: `#${metrics[5].color_code}`}}>
                     {`${metrics[5].difference.toFixed(2)}% ${metrics[5].unicode}`}
                  </div>
               )
            }
   }

   console.log('selection:', selection)
   console.log('metrics-->', metrics)

   return (
      <div>
         <NavbarDash />
         <StatsViewWrapper>
            <DeckTitle>
               {deckName}
            </DeckTitle>
            <ImgDiv>
               <img src={StudyImg} alt='studius young lady' />
            </ImgDiv>
            <DropDownMenu
               onChange={handleChange}
            >
               <MenuItem>Daily</MenuItem>
               <MenuItem>Weekly</MenuItem>
               <MenuItem>Monthly</MenuItem>
            </DropDownMenu>
            <MetricsWrapper>
               <StatsItem>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <MetricSquare style={{ backgroundColor: '#FF909A' }} />
                     <MetricValues>
                        <MVtop>
                           {
                              (metrics.length > 0)
                                 ?  cardsPerMin(metrics)
                                 :  'Loading...'
                           }
                        </MVtop>
                        <MVbottom>Cards Per Minute</MVbottom>
                     </MetricValues>
                  </div>
                  <MetricChanges>
                     {
                        (metrics.length > 0)
                           ?  cardsPerMinDiff(metrics)
                           :  'Loading...'
                     }
                  </MetricChanges>
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
                        <MVtop>
                           {
                              (metrics.length > 0)
                                 ?  bestSesh(metrics)
                                 :  'Loading...'
                           }
                        </MVtop>
                        <MVbottom>Best Study Session</MVbottom>
                     </MetricValues>
                  </div>
                  <MetricChanges>
                     {
                        (metrics.length > 0)
                           ?  bestSeshDiff(metrics)
                           :  'Loading...'
                     }
                  </MetricChanges>
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