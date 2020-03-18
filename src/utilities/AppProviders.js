import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {getStore} from "./getStore.js";
import {getGlobalStyles} from "./getGlobalStyles.js";
import {useLogger} from "../customHooks/useLogger.js";
import {BrowserRouter as Router} from "react-router-dom";
import {createMessage, logOutMessageOrDebug} from "./debugLogger.js";
import {useAppHooksState, AppHooksContext} from "../customHooks/useAppHooks.js";
import {LOG_TYPES} from "./constants.js";
import {STORAGE_BACKUP_DEBUG_NAME} from "../middleWare/reduxMiddware.js";
import {useHooksInit} from "../customHooks/useHooksInit.js";
import {REDUCER_NAMES} from "../reducers";
import {SYNAPS_CONFIG} from "../synapsConfig.js";

export const APP_PROVIDER_DEBUG_NAME = "App Provider";

const GlobalStyles = getGlobalStyles();
const initialState = {};
if(process.env.NODE_ENV !== "test"){
  REDUCER_NAMES.forEach(key => {
     try {
      const stateKey = JSON.parse(
        localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + key)
      );
      

      if (typeof stateKey === 'object' && stateKey !== null) {
        initialState[key] = stateKey;
      }

      logOutMessageOrDebug(
        createMessage(
          `Retried ${key} from local storage and adding it to initial state.`,
          LOG_TYPES.INFO,
          STORAGE_BACKUP_DEBUG_NAME,
        ),
      );
      
      logOutMessageOrDebug(
        createMessage(
          initialState[key],
          LOG_TYPES.OBJECT,
          STORAGE_BACKUP_DEBUG_NAME,
        ),
      );
    }catch(e){
      logOutMessageOrDebug(
        createMessage(
          `Unable to parse local store info for key ${key}`,
          LOG_TYPES.INFO,
          STORAGE_BACKUP_DEBUG_NAME,
        ),
      );
      
      initialState[key] = "";
    }
  });
}

export const store = getStore(
  Object.values(initialState).length >= REDUCER_NAMES.length && initialState,
);
//push
/**
 * App Providers
 * @category Utilities
 *
 * @description Store and theme provider setup for our application.
 */
const AppProvider = props => {
  
  useEffect(() => {
  }, []);
  
  const {hooks, setHookVariable} = useAppHooksState();
  const logger = useLogger(APP_PROVIDER_DEBUG_NAME);
  logger.logInfo(`Node Env: ${process.env.NODE_ENV}.`);
  logger.logInfo(`App provider being rendered.`);
  logger.logInfo("App provider props");
  logger.logObject(props);
  
  return (
    <Provider store={store}>
      <AppHooksContext.Provider value={{setHookVariable, ...hooks}}>
        <Router>
          <AfterHooks {...props} />
        </Router>
      </AppHooksContext.Provider>
    </Provider>
  );
};

const AfterHooks = props => {
  const logger = useLogger(APP_PROVIDER_DEBUG_NAME);
  logger.logInfo(`After hooks provider rendered.`);
  useHooksInit();
  return (
    <>
      <GlobalStyles/>
      {props.children}
    </>
  );
};

export default AppProvider;
