import React, {useState} from 'react';
import {FormInput, SynapsButton} from '../components';
import SvgSynapsLogoText from '../svgComponents/SvgSynapsLogoText.js';
import styled from 'styled-components';
import {EMAIL_PROVIDER, GOOGLE_PROVIDER, signIn} from '../actions';
import theming from 'styled-theming';
import {useTheming} from '../customHooks/useTheming.js';
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from '../customHooks/themingRules.js';
import {APP_PATHS, MEDIA_QUERIES, THEME} from '../utilities/constants.js';

/**
 * Sign In
 * @category Views
 * @component
 * @example return (<SignIn />);
 */
export function SignIn (props) {
  const {dispatch, theme, path, appView, height,} = props.getHooks(
    'SignIn'
  );
  const [info, setInfo] = useState({email: '', password: '', error: {}});
  const getValue = useTheming();

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
    if (path === APP_PATHS.SIGN_IN_PATH) {
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
        maxHeight={'1000px'}
        maxWidth={'1000px'}
        margin={'10px 0 0 0'}
        fill={
          theme.BACKGROUND === THEMING_VALUES.DARK
            ? theme.themeState.NAV_BAR_LIGHT
            : theme.themeState.SECONDARY_DARKER1
        }
        height={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: '176px',
          [THEMING_VALUES.TOP]: '1500px',
          [THEMING_VALUES.MOBILE]: '150px',
        })}
        width={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: '614px',
          [THEMING_VALUES.TOP]: '1500px',
          [THEMING_VALUES.MOBILE]: '300px',
        })}
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

      <StyledBorder/>

      <StyledFormInput>
        <FormInput
          className={'email-form-input'}
          name={'email'}
          onChange={handleChange}
          value={info.email}
          block={false}
          label={'Email Address'}
          bordered={false}
        />
        <FormInput
          className={'email-form-input'}
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

const switchText = theming(THEMING_VARIABLES.BACKGROUND, {
  [THEMING_VALUES.DARK]: 'white',
  [THEMING_VALUES.LIGHT]: ({theme}) => {
    return theme.themeState.primaryColor36405C;
  },
});

const StyledBtn2 = styled(SynapsButton)`
  && {
    color: ${switchText};
    width: 260px;
    height: 60px;
    background-color: transparent;
    margin: 0 0 1.5em;
    padding: 0 2em 0;
    border: 2px solid ${switchText};
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
      border: 2px solid ${switchText};
      span {
        color: ${switchText};
      }
    }
  }
`;

const StyledBtn = styled(SynapsButton)`
  && {
    display: flex;
    justify-content: space-evenly;
    color: white;
    background-color: ${THEME.PRIMARY_COLOR_LIGHTER1};
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
    
  }
  
  .email-form-input {
      border-bottom: 1px solid #36405c;
  }
  & label {
    color: ${switchText};
  }
  
  @media ${MEDIA_QUERIES.tablet} {
    & label {
      color: ${switchText};
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 24px;
    }
    & input {
      background-color: transparent;
    
    }
  }
`;

const StyledSignIn = styled.div`
  color: ${switchText};
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
