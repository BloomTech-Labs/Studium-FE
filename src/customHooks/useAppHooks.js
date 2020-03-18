import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {themeState} from './useThemeContext.js';
import {useStyledThemingRules} from './useStyledThemingRules.js';
import {useLogger} from './useLogger.js';
import {APP_VIEW_MOBILE} from './themingRules.js';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export const APP_HOOKS_DEBUG_NAME = 'App Hooks';
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

export const useAppHooks = () => {
  const {...stuff} = useContext(AppHooksContext);
  const logger = useLogger(APP_HOOKS_DEBUG_NAME);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    logger.logInfo('Hooks updated');
    logger.logObject(stuff);
  }, [stuff]);

  const {
    setHookVariable,
    path,
    pushedState,
    appView,
    width,
    height,
    theme,
    checkAllRules,
    setRules,
  } = stuff;

  const {usersState, photosState, cardsState, decksState} = useSelector(
    reducerState => reducerState
  );

  /**
   * @typedef {object} UseAppHooksReturn
   *@property {function} setHookVariable
   * @property {Dispatch}  dispatch
   * @property {History} history
   * @property {UsersReducerState} usersState
   * @property {CardsState} cardsState
   * @property {PhotoReducerState} photosState
   * @property {{}} deckState
   * @property {Theme} theme
   * @property {function} setRules
   * @property {AppView} appView
   * @property {ChangePath} changePath
   * @property {APP_PATH} path,
   * @property {any} pushedState
   * @property {number} height
   * @property {number} width
   */

  return {
    dispatch,
    history,
    usersState,
    cardsState,
    photosState,
    decksState,
    checkAllRules,
    theme,
    setRules,
    appView,
    path,
    pushedState,
    width,
    height,
    setHookVariable,
  };
};

export const USE_APP_HOOKS_STATE_DEBUG_NAME = 'App Hooks State';

export const useAppHooksState = () => {
  const path = '/';
  const dispatch = '';
  const pushedState = {};
  const appView = APP_VIEW_MOBILE;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const history = {};
  const logger = useLogger(USE_APP_HOOKS_STATE_DEBUG_NAME);
  const {checkAllRules, setRules} = useStyledThemingRules();

  const initialState = {
    dispatch,
    path,
    pushedState,
    appView,
    width,
    height,
    theme: themeState,
    history,
    useAppHooksInit: false,
    checkAllRules,
    setRules,
  };

  logger.logInfo('Hooks almost initialized for the App Provider. ');
  logger.logInfo('Initial State');
  logger.logInfo(initialState);

  const [hooks, setHooks] = useState(initialState);

  const setHookVariable = (name, value) => {
    logger.logInfo(`Setting ${name} to new value`);
    logger.logObject(value);
    let string = JSON.stringify(hooks);
    let newhooks = JSON.parse(string);
    newhooks[name] = value;
    setHooks(newhooks);
  };

  return {hooks, setHookVariable};
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

export * from './useLogger.js';

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
