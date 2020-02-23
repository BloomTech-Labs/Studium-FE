import React, { useState } from 'react';
import styled from 'styled-components';


const Card = ( {flashCard, flashImage} ) => { 
    const [position, setPosition] = useState("front"); 
    const flipCard = () => {
        const newPos = position === "front" ? "back" : "front";
        setPosition (newPos);
    }
    return (
    <div style = {{position: "relative"}}>
        <StyledCard position = {position} onClick = {flipCard} style = {{width:"285px", height:"421.56px"}}>
            <CardText>
                { position === "front" ? Card.question : Card.answer}
           </CardText>
        </StyledCard>
        <StyledStackCard>

        </StyledStackCard>
    </div>
    )
}

const StyledStackCard = styled (Card)`
&& {
margin: 121px auto 0 auto; 
background: "black";
border-radius: 11px;
position: absolute; 
top: 5px; 
width:"280px";
height:"421.56px";
z-index: -5px;
    }
`


const StyledCard = styled (Card)`
&& {
margin: 121px auto 0 auto; 
background: ${props => props.position === "front" ? "#F7F7F7" : "#1b1414c9" };
color: ${props => props.position === "front" ? "#1b1414c9" : "white" };
-webkit-box-shadow: 13px 18px 25px 0px rgba(33,32,33,1);
-moz-box-shadow: 13px 18px 25px 0px rgba(33,32,33,1);
box-shadow: 13px 18px 25px 0px rgba(33,32,33,1);
border-radius: 11px;
> .ant-card-body {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
}
transition: all 1s; 
`
const CardText = styled.div`
height: 100%;
display: flex; 
justifyContent: center; 
font-size: 20px; 
font-weight: 900;
transition: all 1s; 
`
export default Card; 