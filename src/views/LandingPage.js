import React from "react";
import styled from "styled-components";
import SmallLogo from "../components/Styled/SmallLogo";
import  StyledButton  from '../components/Styled/StyledButton';
import logo from "../images/logo.jpg";

const size = {
  mobile: '380px',
  desktop: '1440px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  desktop: `(max-width: ${size.desktop})`
}

const LandingPage = () => {
  return ( 
  <StyledLandingPage>
    <Mobile>
      <SmallLogo></SmallLogo>
      <MobileLandingPage>
        <MobileHeader>
          <MobileHeaderName>synaps</MobileHeaderName>
        </MobileHeader>
      <StyledButton text={"Sign In"} top={"471%"} left={"82px"} position={"absolute"} size={"large"}></StyledButton>
      <StyledButton text={"Sign Up"} top={"566%"} left={"82px"} position={"absolute"} size={"large"}></StyledButton>
      </MobileLandingPage>
      </Mobile>
   <Desktop>
    <Menu1>Link 1</Menu1>
    <Menu2>Link 2</Menu2>
    <Menu3>Link 3</Menu3>
    <HeaderName><h1>Synaps</h1></HeaderName>
    <LogoImage></LogoImage>
    <Vector></Vector>
    <FlashCard></FlashCard>
    <Headline><h1 class="headline">Big CTA Headline</h1></Headline>
    <CTAButton></CTAButton>
    <Paragraph><p>You get this app. You should really get this app. Something else about getting the app. Get it now</p></Paragraph>
    <Paragraph2><p>Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it. Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it</p></Paragraph2>
    <Group1></Group1>
    <Group1Text>Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it</Group1Text>
    <Group2></Group2>
    <Group2Text>Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it</Group2Text>
    <Group3></Group3>
    <Group3Text>Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it</Group3Text>
    <Group4></Group4>
    <Group4Text>Here is more about this amazing and super helpful app that will make you an amazing science student. Here’s how we do it</Group4Text>
    <Rectangle></Rectangle>
    </Desktop> 
  </StyledLandingPage> );
};

const Mobile = styled.div`
display:none;
@media ${device.desktop}{
  display:flex; 
}
`;

const LogoHolder = styled.div`
height: 250px;
width: 250px;
background-color: rgba(196, 196, 196, 0.59);
border-radius: 50%;
position:absolute;
left: 16%;
top: 43px;
`;
const MobileHeader = styled.div`
position: absolute;
left: 3.63%;
right: 84%;
top: 14.8%;
bottom: 31.19%;

`;

const MobileHeaderName = styled.div`
position: absolute;
width: 600px;
height: 100px;
left: -105px;
top: 539%;
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 85px;
line-height: 104.9%;
/* or 128px */
color: #231F20;
`;


const Desktop = styled.div`
display: none; 
@media ${device.mobile}{
display: flex; 
}
`;

const HeaderName = styled.div`
position: absolute;
width: 252px;
left: 213px;
top: 42px;
font-size:30px;
`;

const LogoImage= styled.div`
    image: url(${logo});
`;

const Menu1 = styled.div`
max-width:1400px; 
position: absolute;
width: 152px;
height: 41px;
left: 881px;
top: 65px;

font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const Menu2 = styled.div`
position: absolute;
width: 152px;
height: 41px;
left: 1033px;
top: 65px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const Menu3 = styled.div`
position: absolute;
width: 152px;
height: 41px;
left: 1185px;
top: 65px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const StyledLandingPage = styled.div`
position: relative;
height: 579px;
background: #FFFFFF;
`;

const MobileLandingPage = styled.div`
position: fixed;
height: 100px;
background: #FFFFFF;
`;

const Headline= styled.div`
position: absolute;
width: 600px;
height: 100px;
left: 56px;
top: 139px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 122px;
line-height: 104.9%;
/* or 128px */
color: #000000;

`;
const FlashCard = styled.div`
position: absolute;
width: 440px;
height: 518px;
left: 889px;
top: 176px;
background: #FFFFFF;
border: 7px solid rgba(161, 161, 161, 0.25);
box-sizing: border-box;
`;

const Vector = styled.div`
max-width:1400px;
position: absolute;
width: 692px;
height: 646px;
left: 753px;
top: 128px;
background: rgba(11, 12, 12, 0.14);
opacity: 0.24; 
`;


const Rectangle = styled.div`
position: absolute;
width: 100%;
height: 279px;
left: 0px;
top: 2800px;
background: #C4C4C4;
`;

const Paragraph = styled.div`
position: absolute;
width: 621px;
height: 141px;
left: 59px;
top: 399px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 119.9%;
/* or 42px */
color: #000000;
`;

const Paragraph2 = styled.div`
position: absolute;
width: 1143px;
height: 193px;
left: 160px;
top: 815px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 119.9%;
/* or 42px */
color: #000000;
`;

const CTAButton = styled.div`
position: absolute;
width: 499px;
height: 119px;
left: 111px;
top: 565px;
background: #C4C4C4;
border-radius: 6px;
`;

const Group1 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 160px;
top: 1095px;
background: #C4C4C4;
`;

const Group1Text = styled.div`
position: absolute;
width: 456px;
height: 168px;
left: 180px;
top: 1561px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;


const Group2 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 781px;
top: 1095px;
background: #C4C4C4;
`;

const Group2Text = styled.div`
position: absolute;
width: 476px;
height: 168px;
left: 781px;
top: 1561px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

const Group3 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 160px;
top: 1700px;
background: #C4C4C4;
`;

const Group3Text = styled.div`
position: absolute;
width: 456px;
height: 168px;
left: 180px;
top: 2224px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

const Group4 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 781px;
top: 1700px;
background: #C4C4C4;
`;

const Group4Text = styled.div`
position: absolute;
width: 476px;
height: 168px;
left: 781px;
top: 2224px;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

export default LandingPage;