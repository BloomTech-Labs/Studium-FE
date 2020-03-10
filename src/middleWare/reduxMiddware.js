import React from 'react';
import { cookies } from '../utilities/AppProviders.js';

/**
 * Logs all actions and states after they are dispatched.
 * @category ReduxMiddleware
 */
export const logger = store => next => action => {
  console.group( action.type );
  console.info( 'dispatching', action );
  let result = next( action );
  console.log( 'next state', store.getState() );
  console.groupEnd();
  return result;
};

/**
 * Cookies Middle Ware.
 *
 * @description Saves the new state for each reducer to a cookie on state
 * change.
 * @category ReduxMiddleware
 * @param store
 * @returns {function(*): function(*=): *}
 */
export const cookiesRedux = store => next => action => {
  
  const result = next( action );
  
  if( action.type !== 'SET_INIT_STATE' ){
    const newState = store.getState();
    Object.keys( newState ).forEach( key => {
      cookies.set( key, newState[ key ] );
    } );
  }
  return result;
  
};