import styled from 'styled-components'

export const MainWrapper = styled.div`
background: #F5F5F5;
height: 99vh;
display: flex;
flex-direction: column;
`

export const NamesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
margin-left: 20px;
margin-top: 32px;
`

export const H1 = styled.div`
font-family: Source Sans Pro;
font-weight: bold;
font-size: 30px;
line-height: 38px;
color: #333;
`

export const H2 = styled.div`
font-family: Source Sans Pro;
font-weight: 600;
font-size: 20px;
line-height: 25px;
margin-left: 5px;
margin-top: 10px;
color: #333333;
`

export const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
margin-top: 2vh;
margin-left: 2vh;
margin-right: 2vh;
`

export const CardItself = styled.div`
background: #FFFFFF;
border: 1px solid #C4C4C4;
border-radius: 20px;
width: 150px;
height: 192px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2vh;
`

export const CardFront = styled.div` 
font-family: Source Sans Pro;
font-size: 20px;
line-height: 25px;
color: #333333;
padding: 20px;
`

export const FooterWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
bottom: 0;
background: #fff;
border-top: 1.07966px solid #C4C4C4;
margin-top: auto;
`

export const EditButton = styled.button`
width: 150px;
height: 45px;
border: 1.5px solid #2E71FD;
border-radius: 11px;
background: #fff;
text-align: center;
color: #2E71FD;
font-family: Source Sans Pro;
font-weight: bold;
font-size: 18px;
line-height: 18px;
margin-top: 5px;
`

export const StudyButton = styled.button`
width: 150px;
height: 45px;
background: #2E71FD;
border-radius: 11px;
font-family: Source Sans Pro;
font-weight: bold;
font-size: 18px;
line-height: 18px;
color: #fff;
border: 1.5px solid #2E71FD;
margin-top: 5px;
`