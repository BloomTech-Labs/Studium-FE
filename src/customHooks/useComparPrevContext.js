import React, {useState, useEffect, useContext} from "react";
import {SYNAPS_CONFIG} from "../synapsConfig.js";
import {AppHooksContext, useAppHooks} from "./useAppHooks.js";

export const CONTEXT_API_DEBUG_NAME = "Context Api";
/*
 * useComparPrevContext custom hook.
 * @typedef {function} useComparPrevContext
 */
export const useComparPrevContext = (componentsDebugName,
  initialContext = {}) => {
    
    const {hooks} = useContext(AppHooksContext);
    const {getLogger} = hooks;
    const [isFirst, setIsFirst] = useState(true);
    const [debugName, setDebugName] = useState(componentsDebugName);
    const [prevContext, setPrevContext] = useState([initialContext]);
    const logger = getLogger(debugName);
    
    useEffect(() => {
      logger.logInfo(`Context Compare Setup for ${debugName}`);
    }, []);
    
    const printPrevContext = (number) => {
      let count = 0;
      logger.logInfo(`Prev contexts for ${debugName}`);
      for(let i = prevContext.length; i >= 0 && count < number; i--){
        logger.logObject(prevContext[i - 1]);
        count++;
      }
    };
    
    const addInitialContext = (context) => {
      setPrevContext(context);
    };
    
    const compareContext = (newContext) => {
      
      if(SYNAPS_CONFIG.useLocalStorageToStorePrevContext){
        compareContextLocalStorage(newContext);
      }else{
        const lastContext = prevContext[prevContext.length - 1];
        logCompareContext(lastContext, newContext);
        setPrevContext([...prevContext, newContext]);
      }
    };
    
    const logCompareContext = (lastContext, newContext) => {
      
      if(typeof lastContext === "object"){
        try{
          const difference = [];
          Object.keys(lastContext).forEach(key => {
            if(JSON.stringify(lastContext[key]) !==
              JSON.stringify(newContext[key])){
              logger.logVerbose(`${key} is different on new context`);
              difference.push(key);
            }else{
              logger.logVerbose(
                `Can not tell the difference for ${key}`);
            }
            //
            //            logger.logObjectWithMessage(lastContext[key], "Prev
            // Context "); logger.logObjectWithMessage(newContext[key], "new
            // Context ");
          });
          
          if(difference.length === 0){
            logger.logWarning("Context was not different.");
          }else{
            difference.forEach(key => {
              logger.logObjectWithMessage(lastContext[key],
                `${key} in last context.`,
              );
              logger.logObjectWithMessage(newContext [key],
                `${key} in new context.`,
              );
            });
            
          }
          
        }catch(e){
          logger.logWarning(`Was unable to compare context ${debugName}`);
          logger.logWarning(e.message);
          
        }
        
      }else{
        logger.logVerbose("Comparing prev and new context.");
        if(lastContext === newContext){
          logger.logWarning(
            "Can not tell the difference between prev and new context.");
        }else{
          logger.logObjectWithMessage(lastContext, " Last Context ");
          logger.logObjectWithMessage(lastContext, " New Context ");
        }
        
      }
      
    };
    
    const compareContextLocalStorage = (newContext) => {
      try{
        const lastContextJson = localStorage.getItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName);
        const newContextJson = JSON.stringify(newContext);
        const lastContext = JSON.parse(lastContextJson);
        logCompareContext(lastContext[lastContext.length - 1], newContext);
        localStorage.setItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName,
          JSON.stringify([...lastContext, newContext]),
        );
      }catch(e){
        logger.logWarning("Was unable to parse local storage.");
        logger.logWarning("Deleting local storage for context now.");
        localStorage.removeItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName);
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