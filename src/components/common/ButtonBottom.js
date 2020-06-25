import styled from "styled-components";

const ButtonButtom = styled.button`
 background: ${props => props.loginCTA ? 'white' : '#2E71FD'};
 color: ${props => props.signupCTA ? 'white' : '#2E71FD'};
 border: ${props => props.loginCTA ? '1px solid #2E71FD' : 'none'};
 border-radius: 4px;
 padding: 12px;
 margin: 0 auto 1em auto;
 display: block;
 width: 80%;
 cursor: pointer;
 font-family: 'Source Sans Pro';

 &:hover{
 background: ${props => props.loginCTA ? '#2E71FD' : 'white'};
 color: ${props => props.signupCTA ? '#2E71FD' : 'white'};
 border: ${props => props.loginCTA ? 'none' : '1px solid #2E71FD' };  
}
`;

// export { Button };
export default ButtonButtom;