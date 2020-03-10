import React, { useState } from 'react';

import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { cookiesRedux, logger } from '../middleWare/reduxMiddware.js';
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
export const getStore = () => createStore( rootReducer,
  applyMiddleware( cookiesRedux, logger, Thunk ),
);

/**
 * @typedef {object} Store
 * @property {function} dispatch
 * @property {function} subscribe
 * @property {function} getState
 * @property {function} replaceReducer
 */