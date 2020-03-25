import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavBar, Footer, RouteContainer} from "./components";
import PropTypes from "prop-types";
import {Alert} from "antd";
import {
  useAppHooks,
  mediaQueries,
} from "./customHooks/useAppHooks.js";
import {useAuthStateChange} from "./customHooks/useAuthStateChange.js";
import {SynapsBrain} from "./components";
import {
  APP_VIEW_DESKTOP, THEMING_VARIABLES, THEMING_VALUES,
} from "./customHooks/themingRules.js";
import theming from "styled-theming";
import SvgComponent from "./images/svgBrainPic/brainpic.js";

/**
 * App
 * @category Views
 * @component
 * @example return (<App />);
 */
export default function App(props){
  const [alertMessage, setAlert] = useState("");
  const {theme, usersState, pathname, appView} = useAppHooks("App");
  
  const logger = props.logger;
  
  useEffect(() => {
    logger.logInfo("App view rendered.");
  }, []);
  useAuthStateChange();
  
  useEffect(() => {
    if(usersState.registerError && !alertMessage){
      setAlert("Error logging in. Please try again later.");
    }
  }, [usersState]);
  
  return (
    <StyledApp className="App">
      <StyledSvgContainer className={"brain-pic-svg-container"}>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            top: "0px",
            left: "0px",
          }}
        >
          <SvgComponent/>
        </div>
      </StyledSvgContainer>
      
      {alertMessage && (
        <Alert
          type={"error"}
          onClose={() => setAlert(false)}
          message={alertMessage}
          closable
          style={{
            position: "absolute",
            top: "20px",
            zIndex: "15",
          }}
        />
      )}
      <NavBar/>
      <RouteContainer/>
      <Footer/>
    </StyledApp>
  );
}

App.propTypes = {
  theme: PropTypes.object,
  history: PropTypes.object,
};

const top = theming(THEMING_VARIABLES.BRAIN_SVG, {
  [THEMING_VALUES.BOTTOM]: ({theme}) => {
    return "77%";
  },
  
  [THEMING_VALUES.TOP]: ({theme}) => {
    return "106px";
  },
  
  [THEMING_VALUES.HIDDEN]: ({theme}) => {
    return "0";
  },
});

const StyledSvgContainer = styled.div`
height: 100%;
  position: absolute;
  width: 100vw;
  top: ${top};
  overflow: hidden;
`;

const backgroundColor = theming(THEMING_VARIABLES.BACKGROUND, {
  [THEMING_VALUES.DARK]: ({theme}) => {
    return theme.themeState.primaryColor;
  }, [THEMING_VALUES.LIGHT]: ({theme}) => {
    
    return theme.themeState.navBarLight;
  },
});

const StyledApp = styled.div`
background: ${backgroundColor};
  box-sizing: border-box;
  position: relative;
  color: ${props => props.theme.color};
  padding: 75px 0 50px 0;
  text-align: center;
  flex-direction: column;
  display: flex;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: hidden;

  @media ${mediaQueries.tablet} {
  
  }
`;