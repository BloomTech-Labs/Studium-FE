import { createAxios } from './createAxios';
import {re} from 'lib'
import {
  UPLOADING_PHOTO_FAILED,
  UPLOADING_PHOTO_PROGRESS,
  UPLOADING_PHOTO_SUCCESS,
  UPLOADING_PHOTO_INIT,
  UPLOAD_PHOTO,
} from '../actions/photo';
import { Store } from 'redux';

/**
 *
 * @returns {function(*): function(*=): *}
 * @param {Store} store
 */
export const logger = store => next => action => {
  if (process.env.SHOW_LOGS == 'true') {
    console.group(action.type);
    console.info('dispatching', action);

    console.log('next state', store.getState());
    console.groupEnd();
  }
  let result = next(action);
  return result;
};

/**
 *@throws err
 * @param {Store} store
 * @returns {function(*): Function}
 */
export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);

    throw err;
  }
};

/**
 *
 * @param {Store} store
 * @returns {function(*): Function}
 */
export const rafScheduler = store => next => {
  let queuedActions = [];

  let frame = null;

  function loop() {
    frame = null;
    try {
      if (queuedActions.length) {
        next(queuedActions.shift());
      }
    } finally {
      maybeRaf();
    }
  }
  
  function maybeRaf() {
    if (queuedActions.length && !frame) {
      frame = requestAnimationFrame(loop);
    }
  }
  
  return action => {
    if (!action.meta || !action.meta.raf) {
      return next(action);
    }
    queuedActions.push(action);
    maybeRaf();
    return function cancel() {
      queuedActions = queuedActions.filter(a => a !== action);
    };
  };
};

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N
 * milliseconds. Makes `dispatch` return a function to cancel the timeout in
 * this case.
 * @param {Store} store
 * @returns {function(*=): Function}
 */
export const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), action.meta.delay);
  return function cancel() {
    clearTimeout(timeoutId);
  };
};

export const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action);
  }
  return Promise.resolve(action).then(store.dispatch);
};

export const readyStatePromise = store => next => action => {
  if (!action.promise) {
    return next(action);
  }

  function makeAction(ready, data) {
    const newAction = Object.assign({}, action, { ready }, data);
    delete newAction.promise;
    return newAction;
  }

  next(makeAction(false));

  return action.promise.then(
    result => {
      next(makeAction(true, { result }));
    },
    error => {
      next(makeAction(true, { error }));
    }
  );
};

export const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};
