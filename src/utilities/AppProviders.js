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
import {useAppView} from "../customHooks/useAppView.js";

export const APP_PROVIDER_DEBUG_NAME = "App Provider";
const logger = appLogger.getLogger(APP_PROVIDER_DEBUG_NAME);
const GlobalStyles = getGlobalStyles();
const initialState = {};

if(process.env.NODE_ENV !== "test"){
  storageBackupDebugger.logVerbose("Attempting to get inital state from" +
    " localstorage");
  REDUCER_NAMES.forEach(key => {
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
  const {appLogger, ...rest} = props;
  const logger = appLogger.getLogger(APP_PROVIDER_DEBUG_NAME);
  const {getLogger} = appLogger;
  useEffect(() => {
  
  }, []);
  const {themeRules, themeState, changeTheme} = useThemeRules(
    appLogger.getLogger);
  logger.logInfo(`Node Env: ${process.env.NODE_ENV}.`);
  logger.logInfo(`App provider being rendered.`);
  logger.logInfo("App provider props");
  logger.logObject(props);
  
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{changeTheme, themeState, ...themeRules}}>
        <Provider store={store}>
          <AfterStoreTheme logger={logger} getLogger={getLogger} {...rest} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

const AfterStoreTheme = props => {
  
  const {getLogger, logger} = props;
  const {hooks, setHookVariable} = useAppHooksState(getLogger);
  logger.logVerbose(`After Store and Theme provider rendered.`);
  
  return (
    <>
      <GlobalStyles/>
      <AppHooksContext.Provider
        value={{setHookVariable, hooks}}>
        
        <AfterHooks{...props}/>
      </AppHooksContext.Provider>
    </>
  );
};

const AfterHooks = props => {
  
  const {getLogger, logger} = props;
  logger.logInfo(`After hooks provider rendered.`);
  useThemeContext();
  useDimensions();
  useAppView();
  return (
    <>
      {props.children}
    </>
  );
};

export default AppProvider;
