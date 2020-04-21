import React, {useState, useEffect, useContext} from "react";
import {SYNAPS_CONFIG} from "../synapsConfig.js";
import {AppHooksContext} from "./useAppHooks.js";

export const CONTEXT_API_DEBUG_NAME = "Context Api";
/*
 * useComparPrevContext custom hook.
 * @typedef {function} useComparPrevContext
 */
export const useComparPrevContext = (componentsDebugName,
  initialContext = {}) => {
    
    const {hooks} = useContext(AppHooksContext);
    const [isFirst, setIsFirst] = useState(true);
    const [debugName, setDebugName] = useState(componentsDebugName);
    const [prevContext, setPrevContext] = useState([initialContext]);
    
    const printPrevContext = (number) => {
      let count = 0;
      for(let i = prevContext.length; i >= 0 && count < number; i--){
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
              difference.push(key);
            }else{
            
            }
          });
          
          if(difference.length === 0){
          
          }else{
            difference.forEach(key => {
            });
            
          }
          
        }catch(e){
        
        
        }
        
      }else{
        
        if(lastContext === newContext){
        
        }else{
        
        }
      }
      
    };
    
    const compareContextLocalStorage = (newContext) => {
      try{
        const lastContextJson = localStorage.getItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName);
        const lastContext = JSON.parse(lastContextJson);
        logCompareContext(lastContext[lastContext.length - 1], newContext);
        localStorage.setItem(
          SYNAPS_CONFIG.localStorageContextBasePath + debugName,
          JSON.stringify([...lastContext, newContext]),
        );
      }catch(e){
      
      
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