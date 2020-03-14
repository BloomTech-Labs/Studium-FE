import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LoginSignUpRoute, ProtectedRoute } from "./index.js";
import {
  CreateDeck, Dashboard, FlashCard, LandingPage, PreviewDeck, SignIn, SignUp,
  Testing,
} from "../views";
import { Switch, Route } from "react-router";
import { ContainerDiv } from "../components";
import { useAppHooks, sizes } from "../customHooks/useAppHooks.js";
import { APP_PATHS } from "../customHooks/usePaths.js";

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
export const RouteContainer = ( props ) => {
  const { theme } = useAppHooks();
  
  return (
    <ContainerDiv
      className={ "app-container" }
      position={ "fixed" }
      backgroundColor={ "white" }
      top={ "0" }
      overFlowY={ "hidden" }
      margin={ "75px auto 50px auto" }
      heightMax={ ( theme.screenHeight - 125 ) + "px" }
    >
      <Switch>
        <LoginSignUpRoute path={ APP_PATHS.SIGN_UP_PATH }
                          component={ SignUp } { ...props } />
        <LoginSignUpRoute path={ APP_PATHS.SIGN_IN_PATH }
                          component={ SignIn } { ...props } />
        <ProtectedRoute path={ APP_PATHS.DASHBOARD_PATH }
                        component={ Dashboard }/>
        <ProtectedRoute path={ APP_PATHS.CREATE_DECK_PATH }
                        component={ CreateDeck }/>
        <ProtectedRoute path={ APP_PATHS.PREVIEW_DECK_PATH }
                        component={ PreviewDeck }/>
        <ProtectedRoute path={ APP_PATHS.GAME_PATH } component={ FlashCard }/>
        <Route path={ "/test" } component={ Testing }/>
        
        <LoginSignUpRoute path={ "/" }
                          component={ LandingPage } { ...props } />
      </Switch>
    </ContainerDiv>
  );
};

RouteContainer.propTypes = {};
