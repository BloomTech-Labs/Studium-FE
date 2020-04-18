import React from 'react';
import {useHistory} from 'react-router-dom';

export const USE_CHANGE_PATH_DEBUG = 'Use Change Path';

/**
 * @typedef {function} UseChangePath
 * @return {changePath}
 */
export const useChangePath = () => {
  
  const history = useHistory();
  
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
    
    pathToChangeTo = pathToChangeTo.toLowerCase();
    if(pathToChangeTo !== undefined && pathToChangeTo !==
      history.location.pathname){
      if(stateToPush){
        history.push(pathToChangeTo, stateToPush);
      }else{
        history.push(pathToChangeTo);
      }
      
    }
    
  };
  
  return changePath;
  
};

