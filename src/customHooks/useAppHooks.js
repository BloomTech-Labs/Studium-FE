import React, {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {THEME, useThemeContext} from "./useThemeContext.js";
import {APP_VIEW_DESKTOP, APP_VIEW_MOBILE} from "./themingRules.js";
import {useDispatch} from "react-redux";
import {useChangePath} from "./useHistoryAndPath.js";
import {useHistory} from "react-router-dom";
import {useTheme} from "styled-components";

export const APP_HOOKS_DEBUG_NAME = "App Hooks";

/**
 * Use App Hooks
 *
 * @description This custom hook combines most of the hooks we have been
 * using in this application.
 *
 * @category Custom Hooks
 * @function
 * @name useAppHooks
 * @returns UseAppHooksReturn
 *
 */

export const useAppHooks = (nameOfCaller) => {
  
  const {setHookVariable, hooks} = useContext(AppHooksContext);
  const logger = hooks.getLogger(USE_APP_HOOKS_STATE_DEBUG_NAME);
  /**
   * @typedef {object} Theme
   * @property {function} changeTheme
   * @property {ThemeState} theme
   * @property {object.<THEMING_VALUE, {string}>}
   *
   */
  const theme = useTheme();
  const dispatch = useDispatch();
  const changePath = useChangePath();
  const history = useHistory();
  useEffect(() => {
    logger.logInfo(`Hooks updated for ${nameOfCaller}`);
    
  }, [
    hooks,
  ]);
  
  const {usersState, photosState, cardsState, decksState} = useSelector(
    reducerState => reducerState,
  );
  
  /**
   * @typedef {object} UseAppHooksReturn
   *@property {function} setHookVariable
   *@property {function} getLogger
   * @property {Dispatch}  dispatch
   * @property {UsersReducerState} usersState
   * @property {CardsState} cardsState
   * @property {PhotoReducerState} photosState
   * @property {{}} deckState
   * @property {Theme} theme
   * @property {ThemeRuleValues} themeRules
   * @property {AppView} appView
   * @property {APP_PATH} path,
   * @property {number} height
   * @property {ChangePath} changePath
   * @property {{any}} pushedState
   * @property {number} width
   * @property {number} height
   */
  
  return {
    theme: theme,
    setHookVariable,
    dispatch,
    usersState,
    cardsState,
    photosState,
    decksState,
    changePath,
    ...hooks,
  };
};

export const USE_APP_HOOKS_STATE_DEBUG_NAME = "App Hooks State";

/**
 * Use App Hook State
 * App Hooks Theme Provider State manager.
 * @typedef {function} useAppAHooksState
 *
 * @param {function} getLogger
 * @return {{setHookVariable: setHookVariable, hooks: {pushedState: {}, path:
 *   string, appView: (string | string), width: number, getLogger: function,
 *   history: *, height: number}}}
 */
export const useAppHooksState = (getLogger) => {
  
  const logger = getLogger(USE_APP_HOOKS_STATE_DEBUG_NAME);
  logger.logVerbose("Provider for hooks state called.");
  const history = useHistory();
  const path = history.location.pathname;
  const pushedState = {};
  const appView = window.innerWidth > sizes.tablet ? APP_VIEW_DESKTOP :
    APP_VIEW_MOBILE;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  /**
   * @typedef {object} AppProviderState
   * @property {object} pushedState
   * @property {string} path
   * @property {AppView} appView
   * @property {number} width
   * @property {number} height
   * @property {function} getLogger
   */
  const initialState = {
    path: history.location.pathname,
    pushedState,
    appView,
    width,
    height,
    getLogger,
    history,
  };
  
  logger.logVerbose("Hooks almost initialized for the App Provider. ");
  logger.logVerbose("Initial State");
  logger.logVerbose(initialState);
  
  const [hooks, setHooks] = useState(initialState);
  
  const setHookVariable = (name, value, items = undefined) => {
    if(items === undefined){
      logger.logInfo(`Setting ${name} to new value`);
      logger.logObject(value);
      let newState;
      newState = {...hooks, [name]: value};
      setHooks(newState);
    }else{
      const newHooks = {...hooks};
      items.forEach(item => {
        newHooks[item.name] = item.value;
      });
      setHooks(newHooks);
    }
    
  };
  
  useEffect(() => {
    logger.logInfo("Hooks state changed in provider,");
  }, [hooks]);
  
  return {
    hooks,
    setHookVariable,
  };
};

export const AppHooksContext = React.createContext();

/**
 * @type Sizes
 *
 */
export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

/**
 * @category Utilities
 * @type {Devices}
 */
export const mediaQueries = {
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

/**
 * @typedef {function} Dispatch
 */

/**
 * @typedef {string} Color
 */

/**
 * @typedef {object} Sizes
 * @property {number} mobileS '320px',
 * @property {number} mobileM '375px',
 * @property {number} mobileL '425px',
 * @property {number} tablet '768px',
 * @property {number} laptop '1024px',
 * @property {number} laptopL '1440px',
 * @property {number} desktop '2560px',
 */

/**
 * @typedef {string} MediaQuery
 */

/**
 * @typedef {object} Devices
 * @property {MediaQuery} mobileS   320px
 * @property {MediaQuery} mobileM   375px
 * @property {MediaQuery} mobileL   425px
 * @property {MediaQuery} tablet    768px
 * @property {MediaQuery} laptop    1024px
 * @property {MediaQuery} laptopL   1440px
 * @property {MediaQuery} desktop   2560px
 */
