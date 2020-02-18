import React from 'react';
import StyledInput from '../components/Styled/StyledInput';
import StyledButton from '../components/Styled/StyledButton';
import styled from 'styled-components';
import { signin, GOOGLE_PROVIDER, EMAIL_PROVIDER } from '../actions';
import { useDispatch } from 'react-redux';

export default function SignIn(){
  const dispatch = useDispatch();
  const handleClick = ( e ) => {
    signin( GOOGLE_PROVIDER, dispatch );
    
  };
  
  return ( <StyledSignIn>
      <StyledH1>synaps</StyledH1>
      <StyledH2>Hey! Welcome Back.</StyledH2>
      
      <StyledButton
        style={ { margin: '0 0 1.5em', padding: '0 2em 0' } }
        icon={ 'google' }
        text={ 'Log In with Google' }
        shape={ 'round' }
        size={ 'large' }
        onClick={ e => {
          handleClick( e );
        } }
      
      
      />
      
      <StyledBorder/>
      
      <div styles={ { width: '95%' } }>
        <StyledInput
          block={ true }
          label={ 'Email Address' }
          bordered={ false }
        />
      </div>
      
      <StyledButton
        style={ { padding: '0 2.5em 0' } }
        text={ 'Continue with Email' }
        shape={ 'round' }
        size={ 'large' }
        type={ 'darkgray' }
      />
    </StyledSignIn> );
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
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  margin: 0 0 1em;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
  `;



