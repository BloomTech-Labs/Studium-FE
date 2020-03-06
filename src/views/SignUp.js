import React, { useState } from 'react';
import { FormInput, SynapsText, SynapsButton } from '../components';
import styled from 'styled-components';
import { EMAIL_PROVIDER, GOOGLE_PROVIDER, signIn } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

/**
 * SignUp View
 * @function
 * @returns React.Component
 */
export function SignUp(){
  
  /**
   * @type {Dispatch} dispatch
   */
  const dispatch = useDispatch();
  
  const [ info, setInfo ] = useState( { email: '', password: '', error: {} } );
  
  const handleChange = ( e ) => {
    setInfo( { ...info, [ e.target.name ]: e.target.value } );
  };
  
  const handleGoogleClick = e => {
    dispatch( signIn( GOOGLE_PROVIDER ) );
  };
  
  const handleEmailClick = e => {
    if( info.email !== '' && info.password !== '' ){
      dispatch( signIn( EMAIL_PROVIDER, info.email, info.password ) );
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
  
  return ( <StyledSignUp>
    <SynapsText/>
    
    <SynapsButton
      style={ { margin: '1rem 0 1.5em', padding: '0 2em 0' } }
      icon={ 'google' }
      text={ 'Sign Up with Google!' }
      shape={ 'round' }
      size={ 'large' }
      onClick={ handleGoogleClick }
    />
    
    <StyledBorder/>
    
    <div>
      <FormInput
        name={ 'email' }
        value={ info.email }
        onChange={ handleChange }
        block={ true }
        label={ 'Email Address' }
        bordered={ false }
      />
      <FormInput
        name={ 'password' }
        value={ info.password }
        onChange={ handleChange }
        block={ true }
        label={ 'Password' }
        bordered={ false }
      />
    </div>
    
    <SynapsButton
      style={ { padding: '0 2.5em 0' } }
      text={ 'Continue with Email' }
      shape={ 'round' }
      size={ 'large' }
      type={ 'darkgray' }
      onClick={ handleEmailClick }
    />
  </StyledSignUp> );
}

const StyledSignUp = styled.div`
  margin-top: 146px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledH1 = styled.h1`
  font-size: 5.5em;
  font-weight: 900;
  margin: 0 0 0.5em;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
`;
