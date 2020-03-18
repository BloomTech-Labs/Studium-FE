import React, { useState, useEffect, useContext } from "react";
import { useLogger } from "./useLogger.js";
import { AppHooksContext } from "./useAppHooks.js";
import { useHistory } from "react-router-dom";

export const USE_HISTORY_DEBUG = "Use History";

/**
 * Use History and Path
 * @category Custom Hooks
 * @function
 * @returns {{pushedState: any, path: string, changePath: ChangePath}}
 */
export const useHistoryAndPath = () => {
    
    const { path, pushedState, setHookVariable } = useContext(
      AppHooksContext );
    const history = useHistory();
    const logger = useLogger( USE_HISTORY_DEBUG );
    
    useEffect( () => {
      if( history.location.pathname !== path ){
        setHookVariable( "path", history.location.pathname );
      }
      
      if( history.location.state !== pushedState ){
        setHookVariable( "pushedState", history.location.state );
      }else{
        logger.logWarning( "No history object detected." );
      }
      
    }, [ history.location.pathname ] );
    
    /**
     * Change Path
     * @typedef ChangePath
     *
     * @function
     * @name changePath
     * @param {string} path
     * @param {{} | Any} [stateToPush]
     * @returns void
     */
    const changePath = ( path, stateToPush = null ) => {
      if( stateToPush ){
        history.push( path, stateToPush );
      }else{
        history.push( path );
      }
    };
    
    return { changePath, path, pushedState };
  }
;
