import React, { useState, useEffect } from 'react';

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
  
  const [ width, setWidth ] = useState( window.innerWidth );
  const [ height, setHeight ] = useState( window.innerWidth );
  
  useEffect( () => {
    window.addEventListener( 'resize', updateDimensions );
    
    return () => {
      window.removeEventListener( 'resize', updateDimensions );
    };
  }, [] );
  
  let timer = null;
  
  const updateDimensions = () => {
    
    const update = () => {
      setWidth( window.innerWidth );
      setHeight( window.innerHeight );
      timer = null;
    };
    
    if( timer ){
      clearTimeout( timer );
    }
    timer = setTimeout( update, 200 );
  };
  
  return [ width, height ];
  
};

