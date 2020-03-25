import React, {useState, useEffect, useContext} from "react";
import {AppHooksContext} from "./useAppHooks.js";
import {useHistory} from "react-router-dom";
import {useComparPrevContext} from "./useComparPrevContext.js";

export const USE_CHANGE_PATH_DEBUG = "Use Change Path";

/**
 * @typedef {function} UseChangePath
 * @return {changePath}
 */
export const useChangePath = () => {
  
  const history = useHistory();
  const {hooks, path, pushedState, setHookVariable} = useContext(
    AppHooksContext);
  const logger = hooks.getLogger(USE_CHANGE_PATH_DEBUG);
  
  /**
   * Change Path
   * @typedef {function} ChangePath
   *
   * @function
   * @name changePath
   * @param {string} pathToChangeTo
   * @param {{} | Any} [stateToPush]
   * @returns void
   */
  const changePath = (pathToChangeTo, stateToPush = null) => {
    
    logger.logVerbose(`Change path called.`);
    pathToChangeTo = pathToChangeTo.toLowerCase();
    if(pathToChangeTo !== undefined && pathToChangeTo !==
      history.location.pathname){
      logger.logVerbose("Pushing  new url: " + pathToChangeTo);
      if(stateToPush){
        history.push(pathToChangeTo, stateToPush);
      }else{
        history.push(pathToChangeTo);
      }
      
    }
    
    logger.logVerbose("Not updaing path: " + pathToChangeTo);
  };
  
  return changePath;
  
};

