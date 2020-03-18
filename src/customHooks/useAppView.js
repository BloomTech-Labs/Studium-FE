import React, { useEffect } from "react";
import { sizes, useAppHooks, useLogger } from "./useAppHooks.js";
import { APP_VIEW_DESKTOP, APP_VIEW_MOBILE } from "./themingRules.js";
import { useComparPrevContext } from "./useComparPrevContext.js";

export const APP_VIEW_DEBUG_NAME = "Use App View";

export const useAppView = () => {
  
  const { appView, width, height, setHookVariable } = useAppHooks();
  const logger = useLogger( APP_VIEW_DEBUG_NAME );
  const {compareContext} = useComparPrevContext(APP_VIEW_DEBUG_NAME);
  
  /**
   * Here we check when the width of the screen changes and then set the app
   * view width to desktop or to mobile.
   */
  useEffect( () => {
    logger.logInfo( "Height and width must have changed." );
    if( width > sizes.tablet && appView !== APP_VIEW_DESKTOP ){
      setHookVariable( "appView", APP_VIEW_DESKTOP );
    }else if( width <= sizes.tablet && appView !==
      APP_VIEW_MOBILE ){
      setHookVariable( "appView", APP_VIEW_MOBILE );
    }
    
  }, [ width, height ] );
  
  return { appView, width, height };
  
};