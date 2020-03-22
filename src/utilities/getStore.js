import React, {useState} from "react";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import Thunk from "redux-thunk";
import {storageBackUp, logger} from "../middleWare/reduxMiddware.js";
import rootReducer from "../reducers";

/**
 * Get Store
 *
 * @category Utilities
 * @function
 * @name getStore
 * @returns Store
 *
 */
export const getStore = (initialState, consoleLogger) => {
  let store = null;
  
  if(initialState){
    try{
      store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(storageBackUp, logger, Thunk)),
      );
      if(store){
        consoleLogger.logInfo("Initial state set. ");
        const state = store.getState();
        consoleLogger.logObjectWithMessage(state, "Set up store state." );
        return store;
      }
    }catch(e){
      consoleLogger.logWarning("Was unable to parse local backup of state.");
      consoleLogger.logWarning(e);
      store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(storageBackUp, logger, Thunk)),
      );
      if(store){
        return store;
      }
    }
  }
  
  logger.logVerbose("No previous state found.");
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(storageBackUp, logger, Thunk)),
  );
  return store;
};

/**
 * @typedef {object} Store
 * @property {function} dispatch
 * @property {function} subscribe
 * @property {function} getState
 * @property {function} replaceReducer
 */
