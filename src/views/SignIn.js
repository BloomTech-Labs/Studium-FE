import React, { useState } from 'react';
import { FormInput, SynapsButton, SynapsText, SvgContainer } from '../components';
import styled from 'styled-components';
import { signIn, GOOGLE_PROVIDER, EMAIL_PROVIDER } from '../actions';
import { useAppHooks } from '../customHooks/useAppHooks.js';

/**
 * Sign In
 * @category Views
 * @component
 * @example return (<SignIn />);
 */
export function SignIn( props ){
  
  const { dispatch } = useAppHooks();
  const [ info, setInfo ] = useState( { email: '', password: '', error: {} } );
  
  const handleChange = ( e ) => {
    setInfo( { ...info, [ e.target.name ]: e.target.value } );
  };

  const handleGoogleClick = e => {
    debugger;
    dispatch( signIn( GOOGLE_PROVIDER ) );
  };

  const handleEmailClick = e => {
    if (info.email !== '' && info.password !== '') {
      dispatch(signIn(EMAIL_PROVIDER, info.email, info.password));
    } else {
      if (info.email === '') {
        setInfo({
          ...info,
          error: {email: 'You must enter a email address.'},
        });
      } else {
        setInfo({
          ...info,
          error: {
            password: 'You must first enter a password.',
          },
        });
      }
    }
  };

  return (
    <StyledSignIn data-testid={'sign-in-container'}>
      <div styled={{height: '600px', width: '400px'}}>
      <SvgContainer
        width={'400px'}
        height={'100px'}
        svg={svg}
        zIndex={1}
        position={'block'}
        backgroundColor={theme.primaryColor}
        color={'#fff'}
        opacity={1}
        strokeColor={theme.primaryColor}  
        viewBox={'0 0 0 0'}
      />
      </div>
      <StyledH2>Hey! Welcome Back.</StyledH2>

      <SynapsButton
        style={{margin: '0 0 1.5em', padding: '0 2em 0'}}
        icon={'google'}
        text={'Log In with Google'}
        shape={'round'}
        size={'large'}
        onClick={e => handleGoogleClick(e)}
      />

      <StyledBorder />

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
        onClick={e => handleEmailClick(e)}
      />
    </StyledSignIn>
  );
}

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 146px auto 0 auto;
  height: 100%;
`;

const StyledH2 = styled.h2`
  font-family: Source Sans Pro;
  font-size: 36px;
  line-height: 24px;
  font-weight: bold;
  margin: 1rem 0 1em;
  color: #b7bfbc;
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
`;
