import React, {useContext, useEffect} from "react";
import {useDimensions} from "./useDimensions.js";
import {useLogger} from "./useLogger.js";
import {AppHooksContext} from "./useAppHooks.js";
import {useAppView} from "./useAppView.js";
import {useThemeContext} from "./useThemeContext.js";
import {useStyledThemingRules} from "./useStyledThemingRules.js";

export const USE_HOOKS_INIT_DEBUG_NAME = "Use Hooks Init";

export const useHooksInit = () => {
  const logger = useLogger(USE_HOOKS_INIT_DEBUG_NAME);
  const {setHookVariable} = useContext(AppHooksContext);
  
  logger.logInfo("Use hooks init called.");
  useThemeContext();
  useDimensions();
  useAppView();
};