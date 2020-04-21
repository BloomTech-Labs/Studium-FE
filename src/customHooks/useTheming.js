import React from "react";
import {useTheme} from "styled-components";

/**
 * @typedef (CustomHook) useTheming
 * @param {string} componentName
 * @return {function(...[*]=)}
 */
export const useTheming = () => {
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