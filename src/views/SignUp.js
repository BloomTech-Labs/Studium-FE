import React from 'react'
import StyledInput from '../components/StyledInput'
import StyledButton from '../components/StyledButton'
import styled from "styled-components";

export default function Login() {
    return (
        <StyledLogin>
            <StyledH1>synaps</StyledH1>
            <StyledButton icon={"google" } text={"Sign Up with Google!"} shape={'round'} size={'large'}/>
            <StyledBorder></StyledBorder>
            <StyledInput label={'Email Address'} bordered={false}/>
            <StyledButton text={"Continue with Email"} shape={'round'} size={'large'}/>

        </StyledLogin>
    )
}

const StyledLogin = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const StyledH1 = styled.h1`
    font-size: 5.5em;
    font-weight: 900;
    // background: rgba(196, 196,196, 0.59)
`

const StyledBorder = styled.span`
    border-bottom: 100px dashed red;
`
