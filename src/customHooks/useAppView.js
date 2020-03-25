import React, {useContext, useEffect} from "react";
import {AppHooksContext, sizes, useAppHooks} from "./useAppHooks.js";
import {useComparPrevContext} from "./useComparPrevContext.js";
import {APP_VIEW_DESKTOP, APP_VIEW_MOBILE} from "../utilities/constants.js";

export const APP_VIEW_DEBUG_NAME = "Use App View";

export const useAppView = () => {
  
  const {setHookVariable, hooks} = useContext(
    AppHooksContext);
  const {appView, width, height, getLogger} = hooks;
  const logger = getLogger(APP_VIEW_DEBUG_NAME);
  const {compareContext, printPrevContext, addInitialContext} = useComparPrevContext(
    APP_VIEW_DEBUG_NAME, {appView, height, width});
  logger.logVerbose("Use App View Hook setting up context compare.");
  
  /**
   * Here we check when the width of the screen changes and then set the app
   * view width to desktop or to mobile.
   */
  useEffect(() => {
    
    logger.logInfo("Height and or width changed.");
    compareContext({appView, height, width});
    
    if(width > sizes.tablet && appView !== APP_VIEW_DESKTOP){
      logger.logInfo("Changing app view to DESKTOP");
      setHookVariable("appView", APP_VIEW_DESKTOP);
      
    }else if(width <= sizes.tablet && appView !==
      APP_VIEW_MOBILE){
      logger.logInfo("Changing app view to MOBILE");
      setHookVariable("appView", APP_VIEW_MOBILE);
    }
    
  }, [width, height]);
  
  return {appView, width, height};
  
};