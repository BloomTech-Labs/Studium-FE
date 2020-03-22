import React from "react";
import {reduxLogger, storageBackupDebugger} from "../utilities/oldConsole.js";
import {LOG_TYPES} from "../utilities/constants.js";
import {SYNAPS_CONFIG} from "../synapsConfig.js";

export const REDUX_LOGGER_DEBUG_NAME = "Redux Logger";

/**
 * Logs all actions and states after they are dispatched.
 * @category ReduxMiddleware
 */
export const logger = store => next => action => {
  reduxLogger.logInfo(`Dispatching --> ${action.type}`);
  reduxLogger.logObjectWithMessage(action, "Action");
  
  let result = next(action);
  
  reduxLogger.logObjectWithMessage(store.getState(), "Next state.");
  
  return result;
};

export const STORAGE_BACKUP_DEBUG_NAME = "Storage Backup Middleware";
/**
 * Cookies Middle Ware.
 *
 * @description Saves the new state for each reducer to a cookie on state
 * change.
 * @category ReduxMiddleware
 * @param store
 * @returns {function(*): function(*=): *}
 */
export const storageBackUp = store => next => action => {
  const result = next(action);
  
  if(action.type && action.type !== "SET_INIT_STATE"){
    const newState = store.getState();
    Object.keys(newState).forEach(key => {
      
      const state = JSON.stringify(newState[key]);
      const prevState = localStorage.getItem(
        SYNAPS_CONFIG.localStorageBasePath + key,
      );
      
      
      storageBackupDebugger.logVerbose(`Comparing local storage with new new
        state for reducer ${key}`);
      storageBackupDebugger.logObjectWithMessage(JSON.parse(prevState),
        `PrevState`,
      );
      storageBackupDebugger.logObjectWithMessage(newState[key], `NewState`);
      
      if(prevState !== state){
        storageBackupDebugger.logInfo("Updating local storage.");
        
        localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + key,
          state,
        );
      }else{
        storageBackupDebugger.logVerbose("No reason to update state.");
      }
    });
  }
  return result;
};
