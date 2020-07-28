import styled from 'styled-components';
//Start out with min width and just keep the margin auto to have it move with the page as it gets bigger
//redo ALL OF THESE STYLES
export const LoginScreen = styled.div `
display: flex;
flex-direction: column;
margin: 0 auto;
width: 375px;
height: 95vh;
`
export const AnchorButton = styled.a `
margin: 0 auto;
margin-top: 30px;
text-decoration: none;
`//takes off the underline on sign in with Google button

export const Nav = styled.div`
height: 10%;
width: 375px;
border-bottom: 1px solid #C4C4C4;

`
export const H3 = styled.h3`
width: 71px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 25px;
color: #2E71FD;
`
export const HRStyle = styled.div `
display: flex;
margin-bottom: 30px;
flex-direction: row;
width: 100%;
justify-content: space-evenly;
`
export const H4 = styled.h4 `
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 12px;
color: #010101;

`
export const HRline = styled.hr `
width: 115px;
height: 0px;
margin-top: 20px;
border: 1px solid #C4C4C4;
`
export const HRline2 = styled.hr `
width: 116px;
height: 0px;
margin-top: 20px;
border: 1px solid #C4C4C4;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
`

export const TextBox = styled.input`
width: 311px;
height: 35px;
margin-bottom: 20px;
line-height: 24px;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 6px;
`
export const TextBox2 = styled.input `
width: 311px;
height: 35px;
margin-bottom: 40px;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 6px;
`
export const Button = styled.button `
width: 309px;
height: 50px;
margin: auto;
background: #2E71FD;
border-radius: 6px;
`
