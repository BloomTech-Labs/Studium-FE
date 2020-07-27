import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const NavBar = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
padding: 20px 20px 0 20px;
top: 0;
width: 100%;
cursor: pointer;
border-bottom: 1.07966px solid #C4C4C4;
height: 64px;
`

const H1 = styled.div`
position: absolute;
left: 21px;
top: 32px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
color: #2E71FD;
`

const NavbarDash = (props) => {
    const history = useHistory()

    return (
        <NavBar>
            <H1 onClick={() => {
                history.push('/dashboard')
            }}>Studium</H1>
        </NavBar>
    )
}

export default NavbarDash 