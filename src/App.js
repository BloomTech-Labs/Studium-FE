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
  THEMING_VARIABLES, THEMING_VALUES,
} from "./customHooks/themingRules.js";
import theming from "styled-theming";
import {useTheming} from "./customHooks/useTheming.js";
import SvgComponent from "./images/svgBrainPic/brainpic.js";
import {APP_VIEW_DESKTOP, THEME} from "./utilities/constants.js";

/**
 * App
 * @category Views
 * @component
 * @example return (<App />);
 */
export default function App(props){
  const [alertMessage, setAlert] = useState("");
  const {theme, usersState, pathname, appView} = useAppHooks("App");
  const getValue = useTheming("App.js");
  
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
      {theme.BRAIN_SVG !== THEMING_VALUES.HIDDEN &&
      <SvgBrainPic
        maxWidth={"1500px"}
        maxHeight={"1500px"}
        height={"1500px"}
        width={"1500px"} left={"50%"} transform={"translate(-50%, 0)"}
        fill={getValue(THEMING_VARIABLES.BACKGROUND,
          {
            [THEMING_VALUES.DARK]: THEME.brainPicDark,
            [THEMING_VALUES.LIGHT]: THEME.brainPicLight,
          },
        )}
        top={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: "600PX",
          [THEMING_VALUES.TOP]: "146px",
        })}
      />
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