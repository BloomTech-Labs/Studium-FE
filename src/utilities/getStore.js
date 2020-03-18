import React, {useState} from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import {storageBackUp, logger} from '../middleWare/reduxMiddware.js';
import rootReducer from '../reducers';

/**
 * Get Store
 *
 * @category Utilities
 * @function
 * @name getStore
 * @returns Store
 *
 */
export const getStore = initalState =>
  createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(storageBackUp, logger, Thunk))
  );

/**
 * @typedef {object} Store
 * @property {function} dispatch
 * @property {function} subscribe
 * @property {function} getState
 * @property {function} replaceReducer
 */
