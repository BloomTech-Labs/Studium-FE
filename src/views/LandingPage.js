import React from 'react';
import styled from 'styled-components';
import SmallLogo from '../components/Styled/SmallLogo';
import StyledButton from '../components/Styled/StyledButton';
import { devices } from '../util/breakpoints-device';
import StyledSynapsText from '../components/Styled/StyledSynapsText';

const LandingPage = ( props ) => {
  
  const handleClick = ( name ) => {
    if( name === 'SignIn' ){
      props.history.push( '/signin' );
    }else{
      props.history.push( '/signup' );
    }
  };
  
  return ( <StyledLandingPage>
    <Mobile>
      <SmallLogo/>
      <MobileHeader>
        <StyledSynapsText/>
      </MobileHeader>
      <StyledButton text={ 'Sign In' } size={ 'large' }
                    onClick={ () => handleClick( 'SignIn' ) }
                    style={ {
                      margin: '2rem auto',
                      width: '204px',
                      height: '62px',
                      borderRadius: '15px',
                    } }/>
      <StyledButton text={ 'Sign Up' } size={ 'large' } type={ 'darkgray' }
                    onClick={ () => handleClick( 'SignUp' ) }
                    style={ {
                      margin: '0 auto',
                      width: '204px',
                      height: '62px',
                      borderRadius: '15px',
                    } }
      />
    </Mobile>
    <Desktop>
      <Menu1>Link 1</Menu1>
      <Menu2>Link 2</Menu2>
      <Menu3>Link 3</Menu3>
      <HeaderName><h1>Synaps</h1></HeaderName>
      <Vector/>
      <FlashCard></FlashCard>
      <Headline><h1 className="headline">Big CTA Headline</h1></Headline>
      <CTAButton></CTAButton>
      <Paragraph><p>You get this app. You should really get this app. Something
        else about getting the app. Get it now</p></Paragraph>
      <Paragraph2><p>Here is more about this amazing and super helpful app that
        will make you an amazing science student. Here’s how we do it. Here is
        more about this amazing and super helpful app that will make you an
        amazing science student. Here’s how we do it</p></Paragraph2>
      <Group1></Group1>
      <Group1Text>Here is more about this amazing and super helpful app that
        will make you an amazing science student. Here’s how we do
        it</Group1Text>
      <Group2></Group2>
      <Group2Text>Here is more about this amazing and super helpful app that
        will make you an amazing science student. Here’s how we do
        it</Group2Text>
      <Group3></Group3>
      <Group3Text>Here is more about this amazing and super helpful app that
        will make you an amazing science student. Here’s how we do
        it</Group3Text>
      <Group4></Group4>
      <Group4Text>Here is more about this amazing and super helpful app that
        will make you an amazing science student. Here’s how we do
        it</Group4Text>
      <Rectangle></Rectangle>
    </Desktop>
  </StyledLandingPage> );
};

const Mobile = styled.div`
display:flex;
flex-direction: column;
@media ${ devices.tablet }{
  display:none;
}
`;

const MobileHeader = styled.div`
`;

const Desktop = styled.div`
display: none; 
@media ${ devices.tablet }{
display: flex;
flex-direction: column;
}
`;

const HeaderName = styled.div`
font-size:30px;
`;

const Menu1 = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const Menu2 = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const Menu3 = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
text-align: center;
color: #000000;
`;

const StyledLandingPage = styled.div`
margin-bottom: 75px;
`;

const Headline = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 122px;
line-height: 104.9%;
/* or 128px */
color: #000000;

`;
const FlashCard = styled.div`
background: #FFFFFF;
border: 7px solid rgba(161, 161, 161, 0.25);
box-sizing: border-box;
`;

const Vector = styled.div`
background: rgba(11, 12, 12, 0.14);
opacity: 0.24; 
`;

const Rectangle = styled.div`
background: #C4C4C4;
`;

const Paragraph = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 119.9%;
/* or 42px */
color: #000000;
`;

const Paragraph2 = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 119.9%;
/* or 42px */
color: #000000;
`;

const CTAButton = styled.div`
background: #C4C4C4;
border-radius: 6px;
`;

const Group1 = styled.div`
background: #C4C4C4;
`;

const Group1Text = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

const Group2 = styled.div`
background: #C4C4C4;
`;

const Group2Text = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

const Group3 = styled.div`
background: #C4C4C4;
`;

const Group3Text = styled.div`
/* or 29px */
color: #000000;
`;

const Group4 = styled.div`
background: #C4C4C4;
`;

const Group4Text = styled.div`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 119.9%;
/* or 29px */
color: #000000;
`;

export default LandingPage;
