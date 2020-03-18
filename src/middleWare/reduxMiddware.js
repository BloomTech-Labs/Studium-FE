import React from 'react';
import {logOutMessageOrDebug, createMessage} from '../utilities/debugLogger.js';
import {LOG_TYPES} from '../utilities/constants.js';
import {SYNAPS_CONFIG} from '../synapsConfig.js';

export const REDUX_LOGGER_DEBUG_NAME = 'Redux Logger';

/**
 * Logs all actions and states after they are dispatched.
 * @category ReduxMiddleware
 */
export const logger = store => next => action => {
  logOutMessageOrDebug(
    createMessage('Dispatching', LOG_TYPES.INFO, REDUX_LOGGER_DEBUG_NAME)
  );

  logOutMessageOrDebug(
    createMessage(action, LOG_TYPES.OBJECT, REDUX_LOGGER_DEBUG_NAME)
  );

  let result = next(action);

  logOutMessageOrDebug(
    createMessage('Next State: ', LOG_TYPES.INFO, REDUX_LOGGER_DEBUG_NAME)
  );

  logOutMessageOrDebug(
    createMessage(store.getState(), LOG_TYPES.OBJECT, REDUX_LOGGER_DEBUG_NAME)
  );

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

  if (action.type && action.type !== 'SET_INIT_STATE') {
    const newState = store.getState();
    Object.keys(newState).forEach(key => {
      debugger;
      const state = JSON.stringify(newState[key]);
      const prevState = localStorage.getItem(
        SYNAPS_CONFIG.localStorageBasePath + key
      );

      logOutMessageOrDebug(
        createMessage(
          `Comparing local storage with new new
        state for reducer ${key}`,
          LOG_TYPES.INFO,
          STORAGE_BACKUP_DEBUG_NAME
        )
      );

      logOutMessageOrDebug(
        createMessage('PrevState:', LOG_TYPES.INFO, STORAGE_BACKUP_DEBUG_NAME)
      );

      logOutMessageOrDebug(
        createMessage(prevState, LOG_TYPES.OBJECT, STORAGE_BACKUP_DEBUG_NAME)
      );

      logOutMessageOrDebug(
        createMessage('New State:', LOG_TYPES.INFO, STORAGE_BACKUP_DEBUG_NAME)
      );

      logOutMessageOrDebug(
        createMessage(newState, LOG_TYPES.OBJECT, STORAGE_BACKUP_DEBUG_NAME)
      );

      if (prevState !== newState) {
        logOutMessageOrDebug(
          createMessage(
            'Updating local storage.',
            LOG_TYPES.INFO,
            STORAGE_BACKUP_DEBUG_NAME
          )
        );

        localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + key, state);
      } else {
        logOutMessageOrDebug(
          createMessage(
            'State did not change.',
            LOG_TYPES.INFO,
            STORAGE_BACKUP_DEBUG_NAME
          )
        );
      }
    });
  }
  return result;
};
