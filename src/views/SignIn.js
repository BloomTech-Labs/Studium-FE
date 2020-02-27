import React from 'react';
import StyledInput from '../components/Styled/StyledInput';
import StyledButton from '../components/Styled/StyledButton';
import styled from 'styled-components';
import { signin, GOOGLE_PROVIDER } from '../actions';
import { useDispatch } from 'react-redux';
import StyledSynapsText from '../components/Styled/StyledSynapsText';

export default function SignIn() {
  const dispatch = useDispatch();
/*eslint no-unused-vars:0*/
  const handleClick = e => {
    signin(GOOGLE_PROVIDER, dispatch);
  };

  return (
    <StyledSignIn>
      <StyledSynapsText />
      <StyledH2>Hey! Welcome Back.</StyledH2>

      <StyledButton
        style={{ margin: '0 0 1.5em', padding: '0 2em 0' }}
        icon={'google'}
        text={'Log In with Google'}
        shape={'round'}
        size={'large'}
        onClick={e => {
          handleClick(e);
        }}
      />

      <StyledBorder />

      <div styles={{ width: '95%' }}>
        <StyledInput block={true} label={'Email Address'} bordered={false} />
      </div>

      <StyledButton
        style={{ padding: '0 2.5em 0' }}
        text={'Continue with Email'}
        shape={'round'}
        size={'large'}
        type={'darkgray'}
      />
    </StyledSignIn>
  );
}

const StyledSignIn = styled.div`
  margin-top: 146px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
