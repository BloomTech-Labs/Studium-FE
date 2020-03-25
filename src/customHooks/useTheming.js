import React from "react";
import {useTheme} from "styled-components";
import {useAppHooks} from "./useAppHooks.js";

const USE_THEMING_DEBUG_NAME = "useTheming";


/**
 * @typedef (CustomHook) useTheming
 * @param {string} componentName
 * @return {function(...[*]=)}
 */
export const useTheming = (componentName) => {
  const {getLogger} = useAppHooks("useTheme");
  const theme = useTheme();
  const logger = getLogger(USE_THEMING_DEBUG_NAME);
  
  return (themeVariable, valuesToReturn) => {
    try{
      const themeValue = theme[themeVariable];
      return valuesToReturn[themeValue];
    }catch(e){
      logger.logWarning(
        `Unable to get a return value for ${themeVariable} for ${componentName}.`);
      return Object.values(valuesToReturn)[0];
    }
    
  };
};