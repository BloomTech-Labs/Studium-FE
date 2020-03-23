import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {LoginSignUpRoute, ProtectedRoute} from "./index.js";
import {
  CreateDeck, Dashboard, FlashCard, LandingPage, PreviewDeck, SignIn, SignUp,
  Testing,
} from "../views";
import {Switch, Route} from "react-router";
import {ContainerDiv} from "../components";
import {useAppHooks, sizes} from "../customHooks/useAppHooks.js";
import {APP_PATHS} from "../customHooks/usePaths.js";
import {THEMING_VALUES} from "../customHooks/themingRules.js";
import Debug from "../views/Debug.js";

/**
 *   RouteContainer
 *
 *  @component
 *  @example
 *  return(
 *    <RouteContainer/>
 *  )
 *
 */
export const RouteContainer = (props) => {
  const {height, theme} = useAppHooks("RouteContainer");
  
  const calculateMaxHeight = () => {
    let number = 0;
    if(theme.NAV_STYLE !== THEMING_VALUES.HIDDEN){
      number += theme.navBarTopHeight;
    }
    if(theme.FOOTER !== THEMING_VALUES.HIDDEN){
      number += theme.footerHeight;
    }
    return height - number;
  };
  
  return (
    <ContainerDiv
      className={"route-container"}
      position={"fixed"}
      backgroundColor={"white"}
      top={"0"}
      overFlowY={"scroll"}
      margin={theme.NAV_STYLE === THEMING_VALUES.HIDDEN ? "0 auto" :
        "75px auto"}
      heightMax={calculateMaxHeight() + "px"}
    >
      <Switch>
        <LoginSignUpRoute path={APP_PATHS.SIGN_UP_PATH}
                          component={SignUp} {...props} />
        <LoginSignUpRoute path={APP_PATHS.SIGN_IN_PATH}
                          component={SignIn} {...props} />
        <ProtectedRoute path={APP_PATHS.DASHBOARD_PATH}
                        component={Dashboard}/>
        <ProtectedRoute path={APP_PATHS.CREATE_DECK_PATH}
                        component={CreateDeck}/>
        <ProtectedRoute path={APP_PATHS.PREVIEW_DECK_PATH}
                        component={PreviewDeck}/>
        <ProtectedRoute path={APP_PATHS.GAME_PATH} component={FlashCard}/>
        <Route path={APP_PATHS.TESTING}
               render={props => <Testing {...props}/>}/>
        <Route path={"/debug"}
               render={props => <Debug {...props}/>}/>
        
        <LoginSignUpRoute path={"/"}
                          component={LandingPage} {...props} />
      </Switch>
    </ContainerDiv>
  );
};

RouteContainer.propTypes = {};
