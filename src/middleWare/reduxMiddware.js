import React from 'react';
import {SYNAPS_CONFIG} from '../synapsConfig.js';


/**
 * Logs all actions and states after they are dispatched.
 * @category ReduxMiddleware
 */
export const logger = store => next => action => {
  console.log(`Dispatching --> ${action.type}`);
  console.log(action, 'Action');
  
  let result = next(action);
  
  console.log(store.getState(), 'Next state.');
  
  return result;
};

export const STORAGE_BACKUP_DEBUG_NAME = 'Storage Backup Middleware';
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
  
  if(action.type && action.type !== 'SET_INIT_STATE'){
    const newState = store.getState();
    Object.keys(newState).forEach(key => {
      
      const state = JSON.stringify(newState[key]);
      const prevState = localStorage.getItem(
        SYNAPS_CONFIG.localStorageBasePath + key,
      );
      
      if(prevState !== state){
        localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + key,
          state,
        );
      }else{
      
      }
    });
  }
  return result;
};
