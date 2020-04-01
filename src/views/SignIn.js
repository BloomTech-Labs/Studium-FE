import React, {useState} from 'react';
import {FormInput, SynapsButton, SvgContainer} from '../components';
import SvgSynapsLogoText from '../svgComponents/SvgSynapsLogoText.js';
import styled from 'styled-components';
import {signIn, GOOGLE_PROVIDER, EMAIL_PROVIDER} from '../actions';
import {useAppHooks} from '../customHooks/useAppHooks.js';
import {THEMING_VALUES} from '../customHooks/themingRules.js';
import {APP_PATHS, MEDIA_QUERIES, SIZES} from '../utilities/constants.js';

/**
 * Sign In
 * @category Views
 * @component
 * @example return (<SignIn />);
 */
export function SignIn(props) {
  const {dispatch, theme, path, appView, height} = useAppHooks('SignIn');
  const [info, setInfo] = useState({email: '', password: '', error: {}});

  console.log('APP_PATHS', APP_PATHS);
  console.log('path', path);
  const handleChange = e => {
    setInfo({...info, [e.target.name]: e.target.value});
  };

  const handleSignInClick = type => {
    if (type === EMAIL_PROVIDER) {
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
    } else {
      dispatch(signIn(GOOGLE_PROVIDER));
    }
  };

  const switchWelcomeTitle = () => {
    if (path === '/signin') {
      return <StyledH2>Hey! Welcome Back.</StyledH2>;
    } else {
      return (
        <StyledH2
          style={{
            display: 'none',
          }}
        ></StyledH2>
      );
    }
  };

  return (
    <StyledSignIn data-testid={'sign-in-container'}>
      <SvgSynapsLogoText
        height={'176px'}
        width={'614px'}
        maxHeight={'1000px'}
        maxWidth={'1000px'}
        margin={'10px 0 0 0'}
        fill={
          theme.BACKGROUND === THEMING_VALUES.DARK
            ? theme.themeState.navBarLight
            : theme.themeState.navBarDark
        }
      />

      {switchWelcomeTitle()}
      <div>
        <StyledBtn
          icon={'google'}
          text={'Log In with Google'}
          shape={'round'}
          size={'large'}
          onClick={e => handleSignInClick(GOOGLE_PROVIDER)}
        />
      </div>

      <StyledBorder />

      <StyledFormInput>
        <FormInput
          name={'email'}
          onChange={handleChange}
          value={info.email}
          block={false}
          label={'Email Address'}
          bordered={false}
        />
        <FormInput
          name={'password'}
          onChange={handleChange}
          value={info.password}
          block={true}
          label={'Password'}
          bordered={false}
        />
      </StyledFormInput>

      <StyledBtn2
        text={'Continue with Email'}
        shape={'round'}
        size={'large'}
        type={'darkgray'}
        onClick={e => handleSignInClick(EMAIL_PROVIDER)}
      />
    </StyledSignIn>
  );
}

const StyledBtn2 = styled(SynapsButton)`
  && {
    width: 260px;
    height: 60px;
    background-color: transparent;
    margin: 0 0 1.5em;
    padding: 0 2em 0;
    border: 2px solid #fff;
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 24px;
      margin: auto 0;
    }

    @media ${MEDIA_QUERIES.tablet} {
      width: 352px;
      height: 62px;
      span {
      }
    }
  }
`;

const StyledBtn = styled(SynapsButton)`
  && {
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    background-color: #36405c;
    margin: 0 0 1.5em;
    padding: 0 2em 0;
    width: 260px;
    height: 60px;
    .anticon.anticon-google {
      margin-top: 15px;
      font-size: 32px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 24px;
      margin: auto 10px;
    }

    @media ${MEDIA_QUERIES.tablet} {
      width: 352px;
      height: 62px;
    }
  }
`;

const StyledFormInput = styled.div`
  width: 255px;
  margin: 10px;
  background-color: transparent;
  .ant-input.sc-fzplWN.hgfzoL {
    background: transparent;
    color: #fff;
  }
  & label {
    color: #fff;
  }

  @media ${MEDIA_QUERIES.tablet} {
    & label {
      color: #fff;
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 24px;
    }

    & input {
      background-color: #0d2545;
    }
  }
`;

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 6% auto 0 auto;
  height: 100%;
  width: 100%;
  @media ${MEDIA_QUERIES.desktop} {
    height: 100%;
  }
`;

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 24px;
  margin: 1rem 0 1em;
  color: #b7bfbc;
  @media screen and ${MEDIA_QUERIES.tablet} {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
  }
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #000;
  margin: 0 0 1.5em;
  @media screen and ${MEDIA_QUERIES.tablet} {
    width: 1144px;
    max-width: 100%;
  }
`;
