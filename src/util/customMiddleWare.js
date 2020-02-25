import { createAxios } from './createAxios';
import {
  UPLOADING_PHOTO_FAILED, UPLOADING_PHOTO_PROGRESS, UPLOADING_PHOTO_SUCCESS,
  UPLOADING_PHOTO_INIT, UPLOAD_PHOTO,
} from '../actions/photo';

/**
 * Logs all actions and states after they are dispatched.
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
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
  try{
    return next( action );
  }catch( err ){
    console.error( 'Caught an exception!', err );
    
    throw err;
  }
};

/**
 * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF
 * loop frame.  Makes `dispatch` return a function to remove the action from
 * the queue in this case.
 */
export const rafScheduler = store => next => {
  let queuedActions = [];
  
  let frame = null;
  
  function loop(){
    frame = null;
    try{
      if( queuedActions.length ){
        next( queuedActions.shift() );
      }
    }finally{
      maybeRaf();
    }
  }
  
  function maybeRaf(){
    if( queuedActions.length && !frame ){
      frame = requestAnimationFrame( loop );
    }
  }
  
  return action => {
    if( !action.meta || !action.meta.raf ){
      return next( action );
    }
    queuedActions.push( action );
    maybeRaf();
    return function cancel(){
      queuedActions = queuedActions.filter( a => a !== action );
    };
  };
};

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N
 * milliseconds. Makes `dispatch` return a function to cancel the timeout in
 * this case.
 */
export const timeoutScheduler = store => next => action => {
  if( !action.meta || !action.meta.delay ){
    return next( action );
  }
  const timeoutId = setTimeout( () => next( action ), action.meta.delay );
  return function cancel(){
    clearTimeout( timeoutId );
  };
};

export const vanillaPromise = store => next => action => {
  if( typeof action.then !== 'function' ){
    return next( action );
  }
  return Promise.resolve( action ).then( store.dispatch );
};

export const readyStatePromise = store => next => action => {
  if( !action.promise ){
    return next( action );
  }
  
  function makeAction( ready, data ){
    const newAction = Object.assign( {}, action, { ready }, data );
    delete newAction.promise;
    return newAction;
  }
  
  next( makeAction( false ) );
  
  return action.promise.then( result => {
    next( makeAction( true, { result } ) );
  }, error => {
    next( makeAction( true, { error } ) );
  } );
};

export const thunk = store => next => action => {
  
  if( typeof action === 'function' ){
    return action( store.dispatch, store.getState );
  }else{
    next( action );
  }
};


