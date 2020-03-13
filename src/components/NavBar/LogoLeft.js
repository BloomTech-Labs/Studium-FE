import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContainerDiv, SynapsBrain } from "..";
import { ReactComponent as SmallWhiteLogo } from "../../images/SmallWhiteLogo.svg";
import { useAppHooks, sizes } from "../../customHooks/useAppHooks.js";
import { SynapsLogoText, SynapsFavicon } from "../../svgComponents";

/**
 *  LogoLeft
 *
 *  @component
 *
 */
const LogoLeft = () => {
  const { theme, pathname } = useAppHooks();
  
  if( theme.screenWidth > sizes.tablet ){
    return (
      <ContainerDiv height={ "100%" } position={ "relative" }
                    width={ "250px" } flexDirection={ "row" }
                    justifyContent={ "flex-start" }>
        <SynapsFavicon height={ "100%" } width={ "40%" }/>
        <SynapsLogoText fill={ "#36405C" } width={ "60%" } height={ "100%" }/>
      </ContainerDiv>
    );
  }else{
    return (
      <ContainerDiv>
        <SynapsLogoText fill={ "#36405C" }/>
      </ContainerDiv>
    );
  }
  
};

LogoLeft.propTypes = {};

export default LogoLeft;