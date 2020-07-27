import React from 'react';
import styled from "styled-components";

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
background: #FFF;
`

const H1 = styled.h1`
position: absolute;
left: 21px;
top: 32px;
margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
color: #2E71FD;
`

const NavbarDash = (props) => {

    return (
        <NavBar>
            <H1 onClick={(e) => {
                e.preventDefault();
                window.location.href = "/dashboard";
            }}>Studium</H1>
        </NavBar>
    )
}

export default NavbarDash 