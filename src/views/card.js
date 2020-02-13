import React from 'react';
import styled from 'styled-Component';

const StyledContanier = Styled.div`
border:${(props)=>`1px soild ${props.theme.border.danger}`};
padding:25px 12px 18px;
background:${(props)=>`linear-gradient(45deg,${props.theme.primary.main},${props.theme.main}
    )`};
    `
    const Title= styled.h2`
    color:#fff;
    font-weight:300;
    @meadia(max-width:500px){
        font-size:1rem;
    }
    `
    const Des




const Card =(props)=>(
    <div style={{theme}}>
        <h2>title of the card</h2>
        <div></div>
        <div>
            card content
        </div>
    </div>
)
 export default card