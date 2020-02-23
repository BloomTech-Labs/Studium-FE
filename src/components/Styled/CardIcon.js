import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const CardIcon = ({cardNumber}) => {
    return (
        <div style = {{position: "absolute"}}>
    <StyledStackedCardIconTwo></StyledStackedCardIconTwo>
        <StyledStackedCardIcon></StyledStackedCardIcon>
            <StyledCardIcon style = {{width:"40px", height:"47px"}}>
                <CardIconText>{cardNumber.number}</CardIconText>
            </StyledCardIcon>
            
        </div>
        )
    }

const StyledCardIcon = styled (Card)`
&& {
    display:flex;
    width: 40px;
    height: 52px;
    left: 316px;
    top: 110px;
    background: #C4C4C4;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    }
`

const StyledStackedCardIcon = styled (Card)`
&& {
    position: absolute;
    width: 42px;
    height: 53px;
    left: 321px;
    top: 102px;
    background: #C4C4C4;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
}
`
const StyledStackedCardIconTwo = styled (Card)`
&& {
position: absolute;
width: 42px;
height: 56px;
left: 328px;
top: 94px;
background: #C4C4C4;
border: 1px solid #FFFFFF;
box-sizing: border-box;
}
`

const CardIconText = styled.div`
position: absolute;
top: 12px;
left: 36%;
font-family: Fredoka One;
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 18px;
text-align: center;
color: #000000; 
`
export default CardIcon;