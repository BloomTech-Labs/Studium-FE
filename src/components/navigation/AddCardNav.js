import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import './NavBarDashStyles.css'

const AddCardNav = () => {
   const { id } = useParams()

   return (
      <div className="navBar">
         <div style={{
            display: 'flex',
         }}>
            <Link to={`decks/${id}`} style={{ textDecoration: 'none' }}>
               <CloseIcon style={{fontSize: 'medium'}}/>
            </Link>
            <div style={{
               fontFamily: 'Source Sans Pro',
               fontStyle: 'normal',
               fontWeight: 'bold',
               fontSize: '17px',
               lineHeight: '21px',
               display: 'flex',
               alignItems: 'center',
               marginLeft: '7px',
               marginBottom: '7px'
            }}>
               Add a card
            </div>
         </div>
         <div style={{
            fontFamily: 'Source Sans Pro',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '24px',
         }}>
            Step 3 of 3
         </div>
      </div>
   )
}

export default AddCardNav