import React from 'react';
import StyledInput from '../components/Styled/StyledInput';
import StyledButton from '../components/Styled/StyledButton';
import styled from 'styled-components';

export default function SignUp() {
  return (
    <StyledSignUp>
      <StyledH1>synaps</StyledH1>

      <StyledButton
        style={{ margin: '0 0 1.5em', padding: '0 2em 0' }}
        icon={'google'}
        text={'Sign Up with Google!'}
        shape={'round'}
        size={'large'}
      />

      <StyledBorder></StyledBorder>

      <div styles={{ width: '95%' }}>
        <StyledInput
        block={true} 
        label={'Email Address'} 
        bordered={false} />
      </div>

      <StyledButton
        style={{ padding: '0 2.5em 0' }}
        text={'Continue with Email'}
        shape={'round'}
        size={'large'}
        type={'darkgray'}
      />
    </StyledSignUp>
  );
}

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
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
