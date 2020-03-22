import React, {useState} from 'react';
import {FormInput, SynapsButton, SynapsText, SvgContainer} from '../components';
import {devices} from '../utilities/breakpoints-device';
import SvgComponent from '../images/svgBrainPic/brainpic';
import {ReactComponent as svg} from "../images/SmallWhiteLogo.svg";
import styled from "styled-components";
import {signIn, GOOGLE_PROVIDER, EMAIL_PROVIDER} from "../actions";
import {mediaQueries, useAppHooks} from "../customHooks/useAppHooks.js";

/**
 * Sign In
 * @category Views
 * @component
 * @example return (<SignIn />);
 */
export function SignIn(props){
  const {dispatch, theme, pathname} = useAppHooks("SignIn");
  const [info, setInfo] = useState({email: "", password: "", error: {}});
  const [width, height] = useDimensions();
  console.log('height', height);
  
  
  const handleChange = e => {
    setInfo({...info, [e.target.name]: e.target.value});
  };
  
  const handleGoogleClick = e => {
    dispatch(signIn(GOOGLE_PROVIDER));
  };
  
  const handleEmailClick = e => {
    if(info.email !== "" && info.password !== ""){
      dispatch(signIn(EMAIL_PROVIDER, info.email, info.password));
    }else{
      if(info.email === ""){
        setInfo({
          ...info,
          error: {email: "You must enter a email address."},
        });
      }else{
        setInfo({
          ...info,
          error: {
            password: "You must first enter a password.",
          },
        });
      }
    }
  };
  
  const logoText = () => {
    if(theme.screenWidth < 768){
      return <SynapsText/>;
    }
  };
  
  return (
    <StyledSignIn data-testid={"sign-in-container"}>
      {logoText() || (
        <div styled={{height: "600px", width: "400px", position: "relative"}}>
          {theme.screenWidth < 768 || (
            <SvgContainer
              width={"614px"}
              height={"176px"}
              svg={svg}
              zIndex={15}
              position={"block"}
              backgroundColor={theme.primaryColor}
              color={"#fff"}
              opacity={1}
              strokeColor={theme.primaryColor}
              viewBox={"47 0 25 33"}
              overflow={"visible"}
            />
          )}
        </div>
      )}
      
      <StyledH2>Hey! Welcome Back.</StyledH2>
      <div>
        <StyledBtn
          style={{
            color: "#fff",
            backgroundColor: "#36405C",
            margin: "0 0 1.5em",
            padding: "0 2em 0",
            width: "352px",
            height: "72px",
          }}
          icon={"google"}
          text={"Log In with Google"}
          shape={"round"}
          size={"large"}
          onClick={e => handleGoogleClick(e)}
        />
      </div>
      
      <StyledBorder/>
      
      <StyledFormInput>
        <FormInput
          name={"email"}
          onChange={handleChange}
          value={info.email}
          block={false}
          label={"Email Address"}
          bordered={false}
        />
        <FormInput
          name={"password"}
          onChange={handleChange}
          value={info.password}
          block={true}
          label={"Password"}
          bordered={false}
        />
      
      
      </StyledFormInput>
      
      <StyledBtn2
        style={{
          width: '352px',
          height: '72px',
          backgroundColor: '#0C2545',
          margin: '0 0 1.5em',
          padding: '0 2em 0',
          border: '2px solid #fff',
        }}
        text={"Continue with Email"}
        shape={"round"}
        size={"large"}
        type={"darkgray"}
        onClick={e => handleEmailClick(e)}
      />
      {/* <StyledBrainPic> */}
      {/*
    <SvgContainer
              
              svg={svg}
              
    /> */}
      {/* <brainpic
    style={{
      position: 'absolute',
    }} */}
      {/* /> */}

      {/* </StyledBrainPic>  */}
      <StyledSvgContainer>
        <div
          style={{
            position: 'relative',
            border: '1px red solid',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            top: '0px',
            left: '0px',
          }}
        >
          <SvgComponent />
        </div>
      </StyledSvgContainer>
    </StyledSignIn>
  );
}


const StyledSvgContainer = styled.div`
height: 100%;
  /* height: ${props => props.height - 75 + 'px'}; */
  position: absolute;
  width: 100vw;
  border: 1px pink solid;
  top: 0px;
  overflow: hidden;
`;

const StyledBtn2 = styled(SynapsButton)`
  && {
    span {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

const StyledBtn = styled(SynapsButton)`
  && {
    display: flex;
    justify-content: space-evenly;
    .anticon.anticon-google {
      margin-top: 17px;
      font-size: 32px;
    }
    span {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      margin-top: 21px;
    }
  }
`;
const StyledFormInput = styled.div`
  width: 345px;
  margin: 0px 0px 0px 45px;
  @media ${mediaQueries.tablet} {
    & label {
      color: #fff;
      font-family: Source Sans Pro;
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
overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 146px auto 0 auto;
  height: ${props => props.height - 75 - 146 - 50 + 'px'};
  @media ${devices.desktop} {
  height: 100%;
  @media ${mediaQueries.desktop} {
  }
`;

const StyledH2 = styled.h2`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 24px;
  margin: 1rem 0 1em;
  color: #b7bfbc;
  @media screen and ${mediaQueries.tablet} {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
  }
`;

const StyledBorder = styled.span`
  width: 90%;
  border-bottom: 2px dashed #ccc;
  margin: 0 0 1.5em;
  @media screen and ${mediaQueries.tablet} {
    width: 1144px;
    max-width: 100%;
  }
`;
