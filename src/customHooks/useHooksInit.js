import React, { useContext } from "react";
import { useDimensions } from "./useDimensions.js";
import { useLogger } from "./useLogger.js";
import { AppHooksContext } from "./useAppHooks.js";
import { useAppView } from "./useAppView.js";

export const USE_HOOKS_INIT_DEBUG_NAME = "Use Hooks Init";

export const useHooksInit = () => {
  const logger = useLogger( USE_HOOKS_INIT_DEBUG_NAME );
  const { setHookVariable } = useContext( AppHooksContext );
  
  logger.logInfo( "Use hooks init called." );
  useDimensions();
  useAppView();
};