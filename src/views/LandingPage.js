import React from "react";
import styled from "styled-components";
import Logo from '../images/logo.jpg';

const size = {
  mobile: '375px',
  desktop: '1440px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`
}

const LandingPage = () => {
  return ( 
  <StyledLandingPage>
    <Menu1>Link 1</Menu1>
    <Menu2>Link 2</Menu2>
    <Menu3>Link 3</Menu3>
    <h1>Synaps</h1>
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
  </StyledLandingPage> );
};

const LogoImage= styled.div`
    image: url(${Logo});
`;

const Menu1 = styled.div`
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

@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

const StyledLandingPage = styled.div`
position: relative;
width: 1440px;
height: 3079px;

background: #FFFFFF;
@media ${device.mobile}{
max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

const Headline= styled.div`
position: absolute;
width: 600px;
height: 100px;
left: 56px;
top: 209px;

font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 160.9%;
/* or 128px */

color: #000000;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

const Vector = styled.div`
position: absolute;
width: 692px;
height: 646px;
left: 753px;
top: 128px;

background: rgba(11, 12, 12, 0.14);
opacity: 0.24;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;


const Rectangle = styled.div`
position: absolute;
width: 1440px;
height: 279px;
left: 0px;
top: 2800px;

background: #C4C4C4;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}

`;

const CTAButton = styled.div`
position: absolute;
width: 499px;
height: 119px;
left: 111px;
top: 565px;

background: #C4C4C4;
border-radius: 6px;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

const Group1 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 160px;
top: 1095px;

background: #C4C4C4;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}

`;


const Group2 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 781px;
top: 1095px;
background: #C4C4C4;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

const Group3 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 160px;
top: 1700px;
background: #C4C4C4;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}

`;

const Group4 = styled.div`
position: absolute;
width: 476px;
height: 400.27px;
left: 781px;
top: 1700px;
background: #C4C4C4;
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
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
@media ${device.mobile}{
  max-width: 375px; 
}

@media ${device.desktop} {
  max-width:1400px; 
}
`;

export default LandingPage;