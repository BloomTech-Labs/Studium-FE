import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {getStore} from './getStore.js';
import {getGlobalStyles} from './getGlobalStyles.js';
import {useAppHooksState, AppHooksContext} from '../customHooks/useAppHooks.js';
import {ErrorBoundary} from '../components';
import {REDUCER_NAMES} from '../reducers';
import {SYNAPS_CONFIG} from '../synapsConfig.js';
import {
  useThemeContext, useThemeRules,
} from '../customHooks/useThemeContext.js';
import {useDimensions} from '../customHooks/useDimensions.js';
import {ThemeProvider} from 'styled-components';
import {useAppView} from '../customHooks/useAppView.js';

export const APP_PROVIDER_DEBUG_NAME = 'App Provider';
const GlobalStyles = getGlobalStyles();
const initialState = {};

if(process.env.NODE_ENV !== 'test'){
  
  REDUCER_NAMES.forEach(key => {
    try{
      
      const stateKey = JSON.parse(
        localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + key),
      );
      
      if(typeof stateKey === 'object' && stateKey !== null){
        initialState[key] = stateKey;
      }else{
      
      }
      
    }catch(e){
      
      initialState[key] = '';
    }
  });
}
let store;
if(Object.values(initialState).length >= REDUCER_NAMES.length){
  store = getStore(
    Object.values(initialState).length >= REDUCER_NAMES.length && initialState,
  );
}else{
  store = getStore(false);
}

/**
 * App Providers
 * @category Utilities
 *
 * @description Store and theme provider setup for our application.
 */
const AppProvider = props => {
  
  const {themeRules, themeState, changeTheme} = useThemeRules();
  
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{changeTheme, themeState, ...themeRules}}>
        <Provider store={store}>
          <AfterStoreTheme {...props} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

const AfterStoreTheme = props => {
  
  const {hooks, setHookVariable} = useAppHooksState();
  
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
