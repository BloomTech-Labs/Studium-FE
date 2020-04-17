import React, {useState} from 'react';
import {FormInput, SynapsButton} from '../components';
import SvgSynapsLogoText from '../svgComponents/SvgSynapsLogoText.js';
import styled from 'styled-components';
import {EMAIL_PROVIDER, GOOGLE_PROVIDER, signIn} from '../actions';
import {useAppHooks} from '../customHooks/useAppHooks.js';

/**
 * Sign Up
 * @category Views
 * @component
 * @example return (<SignUp />);
 */
export function SignUp(){
  const {dispatch, theme} = useAppHooks();
  
  const [info, setInfo] = useState({email: '', password: '', error: {}});
  
  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  };
  
  const handleGoogleClick = e => {
    dispatch(signIn(GOOGLE_PROVIDER));
  };
  
  const handleEmailClick = e => {
    if(info.email !== '' && info.password !== ''){
      dispatch(signIn(EMAIL_PROVIDER, info.email, info.password));
    }else{
      if(info.email === ''){
        setInfo({
          ...info, error: {email: 'You must enter a email address.'},
        });
      }else{
        setInfo({
          ...info, error: {
            password: 'You must first enter a password.',
          },
        });
      }
    }
    
  };
  
  return (<StyledSignUp>
    <SvgSynapsLogoText fill={theme.themeState.navBarDark}/>
    
    <SynapsButton
      style={{margin: '1rem 0 1.5em', padding: '0 2em 0'}}
      icon={'google'}
      text={'Sign Up with Google!'}
      shape={'round'}
      size={'large'}
      onClick={handleGoogleClick}
    />
    
    <StyledBorder/>
    
    <div>
      <FormInput
        name={'email'}
        value={info.email}
        onChange={handleChange}
        block={true}
        label={'Email Address'}
        bordered={false}
      />
      <FormInput
        name={'password'}
        value={info.password}
        onChange={handleChange}
        block={true}
        label={'Password'}
        bordered={false}
      />
    </div>
    
    <SynapsButton
      style={{padding: '0 2.5em 0'}}
      text={'Continue with Email'}
      shape={'round'}
      size={'large'}
      type={'darkgray'}
      onClick={handleEmailClick}
    />
  </StyledSignUp>);
}

const StyledSignUp = styled.div`
  margin-top: 146px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
`;
