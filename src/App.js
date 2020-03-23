import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavBar, Footer, RouteContainer} from "./components";
import {SvgBrainPic} from "./svgComponents";
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
import {THEME} from "./customHooks/useThemeContext.js";

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
  
  const getBrainPicColorAndFill = () => {
    const svgBrainProps = {};
    if(theme.BACKGROUND === THEMING_VALUES.DARK){
      svgBrainProps["fill"] = THEME.brainPicDark;
    }else{
      svgBrainProps["fill"] = THEME.brainPicLight;
    }
    
    if(theme.BRAIN_SVG === THEMING_VALUES.BOTTOM){
      svgBrainProps["top"] = "600px";
    }else{
      svgBrainProps["top"] = "146px";
    }
    return svgBrainProps;
  };
  const brainProps = getBrainPicColorAndFill();
  return (
    <StyledApp className="App">
      {theme.BRAIN_SVG !== THEMING_VALUES.HIDDEN &&
      < SvgBrainPic maxWidth={"1500px"} maxHeight={"1500px"} height={"1500px"}
                    width={"1500px"} {...brainProps}/>
      }
      
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
  padding: 0 auto;
  text-align: center;
  flex-direction: column;
  display: flex;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;

  @media ${mediaQueries.tablet} {
  
  }
`;