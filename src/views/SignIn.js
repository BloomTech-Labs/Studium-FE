import React from 'react';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import styled from 'styled-components';

export default function SignIn() {
  return (
    <StyledSignIn>
      <StyledH1>synaps</StyledH1>
      <StyledH2>Hey! Welcome Back.</StyledH2>

        <StyledButton 
          style={{margin: '0 0 1.5em', padding: '0 2em 0'}}
          icon={'google'}
          text={'Log In with Google'}
          shape={'round'}
          size={'large'}
        />

      <StyledBorder></StyledBorder>

      <StyledInput 
      style={{width: '50%'}}
      label={'Email Address'} 
      bordered={false} 
      StyledFormItem={{width: '50%'}}
      />

      <StyledButton
        style={{padding: '0 2.5em 0'}}
        text={'Continue with Email'}
        shape={'round'}
        size={'large'}
      />
    </StyledSignIn>
  );
}


const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const StyledH1 = styled.h1`
  font-size: 5.5rem;
  font-weight: 900;
  margin: 0 0 0.2em;
  // background: rgba(196, 196,196, 0.59)
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  margin: 0 0 1em;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed red;
  margin: 0 0 1.5em;
  `;



