import React, { useState } from 'react';
import StyledInput from '../components/Styled/StyledInput';
import StyledButton from '../components/Styled/StyledButton';
import styled from 'styled-components';
import { signin, GOOGLE_PROVIDER, EMAIL_PROVIDER } from '../actions';
import { useDispatch } from 'react-redux';
import StyledSynapsText from '../components/Styled/StyledSynapsText';

export default function SignIn(){
  /**
   * @type {Dispatch} dispatch
   */
  const dispatch = useDispatch();
  const [ info, setInfo ] = useState( { email: '', password: '', error: {} } );
  
  const handleChange = ( e ) => {
    setInfo( { ...info, [ e.target.name ]: e.target.value } );
  };
  
  const handleGoogleClick = e => {
    signin( GOOGLE_PROVIDER, dispatch );
  };
  
  const handleEmailClick = e => {
    if( info.email !== '' && info.password !== '' ){
      signin( EMAIL_PROVIDER, dispatch, info.email, info.password );
    }else{
      if( info.email === '' ){
        setInfo( {
          ...info, error: { email: 'You must enter a email address.' },
        } );
      }else{
        setInfo( {
          ...info, error: {
            password: 'You must first enter a password.',
          },
        } );
      }
    }
    
  };
  
  return ( <StyledSignIn data-testid={ 'sign-in-container' }>
    <StyledSynapsText/>
    <StyledH2>Hey! Welcome Back.</StyledH2>
    
    <StyledButton
      style={ { margin: '0 0 1.5em', padding: '0 2em 0' } }
      icon={ 'google' }
      text={ 'Log In with Google' }
      shape={ 'round' }
      size={ 'large' }
      onClick={ e => handleGoogleClick( e ) }
    />
    
    <StyledBorder/>
    
    <div>
      <StyledInput
        name={ 'email' }
        value={ info.email }
        onChange={ handleChange }
        block={ true }
        label={ 'Email Address' }
        bordered={ false }
      />
      <StyledInput
        name={ 'password' }
        value={ info.password }
        onChange={ handleChange }
        block={ true }
        label={ 'Password' }
        bordered={ false }
      />
    </div>
    
    <StyledButton
      style={ { padding: '0 2.5em 0' } }
      text={ 'Continue with Email' }
      shape={ 'round' }
      size={ 'large' }
      type={ 'darkgray' }
      onClick={ e => handleEmailClick( e ) }
    />
  </StyledSignIn> );
}

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 146px auto 0 auto;
  height: 100%;
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  margin: 1rem 0 1em;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
`;
