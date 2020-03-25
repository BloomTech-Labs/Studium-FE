import React, {useState, useEffect, useContext} from "react";
import {AppHooksContext} from "./useAppHooks.js";

const USE_DIMENSIONS_DEBUG_NAME = "Use Dimensions";
/**
 * Use Dimensions
 * @category Custom Hooks
 *
 *
 * @description Updates the screen width and screen height on window resize
 * then saves it to the theme.
 *
 */

export const useDimensions = () => {
  
  const {hooks, setHookVariable} = useContext(
    AppHooksContext);
  const {getLogger, width, height} = hooks;
  const logger = getLogger(USE_DIMENSIONS_DEBUG_NAME);
  
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    logger.logVerbose("Set up add event listener for window resize.");
    return () => {
      window.removeEventListener("resize", updateDimensions);
      logger.logVerbose("Removed listen for resize.");
    };
  }, []);
  
  let timer = null;
  
  const updateDimensions = () => {
    
    logger.logVerbose("Update dimensions called");
    
    const update = () => {
      logger.logVerbose("Update called.");
      if(width !== window.innerWidth){
        logger.logVerbose("Updating width.");
        setHookVariable("width", window.innerWidth);
      }
      if(height !== window.innerHeight){
        logger.logVerbose("Updating height.");
        setHookVariable("height", window.innerHeight);
      }
      
      timer = null;
    };
    
    if(timer){
      logger.logVerbose("Clearing the timer");
      clearTimeout(timer);
    }
    logger.logVerbose("Setting the timer for debounce.");
    timer = setTimeout(update, 200);
  };
  
};

