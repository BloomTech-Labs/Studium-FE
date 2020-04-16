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
  const theme = useTheme();
  
  return (themeVariable, valuesToReturn) => {
    try{
      const themeValue = theme[themeVariable];
      return valuesToReturn[themeValue];
    }catch(e){
      return Object.values(valuesToReturn)[0];
    }
    
  };
};