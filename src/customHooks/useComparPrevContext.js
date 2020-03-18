import React, { useState, useEffect } from "react";
import { useLogger } from "./useLogger.js";
import { SYNAPS_CONFIG } from "../synapsConfig.js";

/*
 * useComparPrevContext custom hook.
 * @typedef {function} useComparPrevContext
 */
export const useComparPrevContext = ( componentsDebugName,
  initialContext = {} ) => {
    const [ debugName, setDebugName ] = useState( componentsDebugName );
    const [ prevContext, setPrevContext ] = useState( [ initialContext ] );
    const logger = useLogger( debugName );
    
    useEffect( () => {
      logger.logInfo( "Context Compare Setup " );
    }, [] );
    
    const printPrevContext = ( number ) => {
      let count = 0;
      logger.logInfo( "Prev contexts" );
      for( let i = prevContext.length; i >= 0 && count < number; i-- ){
        logger.logObject( prevContext[ i - 1 ] );
        count++;
      }
    };
    
    const addInitialContext = ( context ) => {
      setPrevContext( context );
    };
    
    const compareContext = ( newContext ) => {
      if( SYNAPS_CONFIG.useLocalStorageToStorePrevContext ){
        compareContextLocalStorage( newContext );
      }else{
        const lastContext = prevContext[ prevContext.length - 1 ];
        logCompareContext( lastContext, newContext );
        setPrevContext( [ ...prevContext, newContext ] );
      }
    };
    
    const logCompareContext = ( lastContext, newContext ) => {
      if( lastContext === newContext ){
        logger.logWarning(
          "Can not tell the difference between prev and new context." );
      }
      logger.logInfo( "New context" );
      logger.logObject( newContext );
      logger.logInfo( "Prev context" );
      logger.logObject( lastContext );
    };
    
    const compareContextLocalStorage = ( newContext ) => {
      try{
        const lastContextJson = localStorage.getItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName );
        const newContextJson = JSON.stringify( newContext );
        const lastContext = JSON.parse( lastContextJson );
        logCompareContext( lastContext[ lastContext.length - 1 ], newContext );
        localStorage.setItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName,
          JSON.stringify( [ ...lastContext, newContext ] ),
        );
      }catch( e ){
        logger.logWarning( "Was unable to parse local storage." );
        logger.logWarning( "Deleting local storage for context now." );
        localStorage.removeItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName );
      }
    };
    
    return {
      compareContext,
      setDebugName,
      debugName,
      printPrevContext,
      addInitialContext,
    };
  }
;