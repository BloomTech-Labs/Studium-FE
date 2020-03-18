import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContainerDiv, SynapsBrain } from "..";
import { useAppHooks, sizes } from "../../customHooks/useAppHooks.js";
import {
  SvgBrainPic, SvgSynapsFavicon, SvgSynapsLogoText,
} from "../../svgComponents";
import {
  APP_VIEW_DESKTOP, APP_VIEW_MOBILE,
} from "../../customHooks/themingRules.js";
import theming from "styled-theming";

/**
 *  LogoLeft
 *
 *  @component
 *
 */
const LogoLeft = () => {
  const { theme, pathname, appView } = useAppHooks();
  
  if( appView === APP_VIEW_DESKTOP ){
    return (
      <ContainerDiv
        height={ "100%" } position={ "relative" }
        id={ "logo-left-container" }
        width={ "250px" } flexDirection={ "row" }
        backgroundColor={ "transparent" }
        alignItems={ "flex-end" } margin={ "2% 0 0 10%" }
      >
        
        <SvgSynapsFavicon height={ "100%" } width={ "40%" }/>
        <SvgSynapsLogoText
          theme={ theme } fill={ theme.synapsDark }
          width={ "60%" }
          height={ "100%" }
        />
      </ContainerDiv>
    );
  }else{
    return (
      <ContainerDiv
        height={ "100%" } width={ "120px" } margin={ "0 0 0 5%" }
        alignItems={ "flex-start" } justifyContent={ "flex-end" }
        flexDirection={ "row" } overFlowY={ "visible" }
        position={ "relative" }>
        <SvgSynapsLogoText svgFill={ theme.synapsLight } zIndex={ 10 }
                           margin={ "15% auto 0 auto" }/>
        
        <Brain containerPosition={ "absolute" } height={ "300px" }
               zIndex={ 5 } svgFill={ "#164172" }
               width={ "300px" } top={ "-25%" } svgWidth={ "100%" }
               svgHeight={ "100%" }
               left={ "-40%" }/>
      </ContainerDiv>
    );
  }
  
};

const Brain = styled( SvgBrainPic )`
transform: rotateY("180deg");
`;

LogoLeft.propTypes = {};

export default LogoLeft;