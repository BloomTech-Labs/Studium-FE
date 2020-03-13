import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

/**
 * Use History and Path
 * @category Custom Hooks
 * @function
 * @returns {{pushedState: any, path: string, changePath: ChangePath}}
 */
export const useHistoryAndPath = () => {
  const history = useHistory();
  const [ path, setPath ] = useState( history.location.pathname );
  const [ pushedState, setPushedState ] = useState( null );
  
  useEffect( () => {
    if( history.location.pathname !== path ){
      setPath( history.location.pathname );
    }
    
    if( history.location.state !== pushedState ){
      setPushedState( history.location.state );
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
};
