import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {getStore} from "./getStore.js";
import {getGlobalStyles} from "./getGlobalStyles.js";
import {useAppHooksState, AppHooksContext} from "../customHooks/useAppHooks.js";
import {ErrorBoundary} from "../components";
import {REDUCER_NAMES} from "../reducers";
import {SYNAPS_CONFIG} from "../synapsConfig.js";
import {storageBackupDebugger} from "./oldConsole.js";
import {
  useThemeContext, useThemeRules,
} from "../customHooks/useThemeContext.js";
import {useDimensions} from "../customHooks/useDimensions.js";
import appLogger from "../utilities/oldConsole.js";
import {ThemeProvider} from "styled-components";

export const APP_PROVIDER_DEBUG_NAME = "App Provider";
const logger = appLogger.getLogger(APP_PROVIDER_DEBUG_NAME);
const GlobalStyles = getGlobalStyles();
const initialState = {};

if(process.env.NODE_ENV !== "test"){
  REDUCER_NAMES.forEach(key => {
    
    storageBackupDebugger.logVerbose("Attempting to get inital state from" +
      " localstorage");
    try{
      
      const stateKey = JSON.parse(
        localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + key),
      );
      
      storageBackupDebugger.logObjectWithMessage(stateKey, `${key}`);
      if(typeof stateKey === "object" && stateKey !== null){
        initialState[key] = stateKey;
      }else{
        storageBackupDebugger.logWarning("Unable to parse localstorage for" +
          " state.");
      }
      
    }catch(e){
      storageBackupDebugger.logError(e.message);
      initialState[key] = "";
    }
  });
}
let store;
if(Object.values(initialState).length >= REDUCER_NAMES.length){
  store = getStore(
    Object.values(initialState).length >= REDUCER_NAMES.length && initialState,
    logger,
  );
}else{
  store = getStore(false, logger);
}

/**
 * App Providers
 * @category Utilities
 *
 * @description Store and theme provider setup for our application.
 */
const AppProvider = props => {
  const {appLogger} = props;
  
  const {themingRules, changeTheme} = useThemeRules(appLogger.getLogger);
  const logger = appLogger.getLogger(APP_PROVIDER_DEBUG_NAME);
  useEffect(() => {
  
  }, []);
  
  logger.logInfo(`Node Env: ${process.env.NODE_ENV}.`);
  logger.logInfo(`App provider being rendered.`);
  logger.logInfo("App provider props");
  logger.logObject(props);
  
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{changeTheme, ...themingRules}}>
        <Provider store={store}>
            <AfterHooks {...props} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

const AfterHooks = props => {
  
  
  const getLogger = props.appLogger.getLogger;
  const logger = getLogger(APP_PROVIDER_DEBUG_NAME);
  const {hooks, setHookVariable} = useAppHooksState(getLogger);
  logger.logInfo(`After hooks provider rendered.`);
  useThemeContext();
  useDimensions();
  
  return (
    <>
      <GlobalStyles/>
      <AppHooksContext.Provider
        value={{setHookVariable, hooks}}>
      </AppHooksContext.Provider>
      {props.children}
    </>
  );
};

export default AppProvider;
