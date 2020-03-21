import React, {useState, useEffect, useContext} from "react";
import {AppHooksContext} from "./useAppHooks.js";
import {useHistory} from "react-router-dom";
import {useComparPrevContext} from "./useComparPrevContext.js";

export const USE_HISTORY_DEBUG = "Use History";
export const USE_CHANGE_PATH_DEBUG = "Use Change Path";

/**
 * Use History and Path
 * @category Custom Hooks
 * @function
 * @returns {{pushedState: any, path: string}}
 */
export const useHistoryAndPath = () => {
    const history = useHistory();
    
    const {path, pushedState, setHookVariable, getLogger} = useContext(
      AppHooksContext);
    
    const logger = getLogger(USE_HISTORY_DEBUG);
    logger.logVerbose("Use History and Path hook running.");
    
    // listen for changes to the route and make a change to the store if its
    // different.
    useEffect(() => {
      
      if(history.location.pathname !== path){
        setHookVariable("path", history.location.pathname);
        logger.logInfo(`Setting new path variable.`);
      }
      
      if(history.location.state !== pushedState){
        
        logger.logObjectWithMessage(history.location.state, "New location" +
          " state.");
        setHookVariable("pushedState", history.location.state);
      }else{
        logger.logWarning("No history object detected.");
      }
      
    }, [history.location.pathname]);
    
    return {path, pushedState};
  }
;

/**
 * @typedef {function} UseChangePath
 * @return {changePath}
 */
export const useChangePath = () => {
  
  const history = useHistory();
  const {getLogger} = useContext(AppHooksContext);
  const logger = getLogger(USE_CHANGE_PATH_DEBUG);
  
  logger.logVerbose(`useChangePath has been called.`);
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
    console.trace();
    
    logger.logVerbose(`"Change path function init.`);
    console.trace();
    debugger
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

