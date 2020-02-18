import React from "react";
import styled from "styled-components";
import { signout } from "../actions";
import {useDispatch} from 'react-redux';
// import Footer from '../components/Footer/Footer';

const LandingPage = () => {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    signout(dispatch)
  }
  return ( <StyledLandingPage>
    <h1>Landing Page</h1>
    {/* <Footer /> */}
    <button onClick = {handleClick}>Sign Out</button>
  </StyledLandingPage> );
};

const StyledLandingPage = styled.div``;

export default LandingPage;