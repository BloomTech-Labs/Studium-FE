import React, {useEffect, useContext} from 'react';
import {AppHooksContext} from './useAppHooks.js';

/**
 * Use Dimensions
 * @category Custom Hooks
 *
 *
 * @description Updates the screen width and screen height on window resize
 * then saves it to the theme.
 *
 */

export const useDimensions = () => {
  
  const {hooks, setHookVariable} = useContext(
    AppHooksContext);
  const {width, height} = hooks;
  
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  let timer = null;
  
  const updateDimensions = () => {
    
    const update = () => {
      if(width !== window.innerWidth){
        setHookVariable('width', window.innerWidth);
      }
      if(height !== window.innerHeight){
        setHookVariable('height', window.innerHeight);
      }
      
      timer = null;
    };
    
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(update, 200);
  };
  
};

