import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistoryAndPath } from './useHistoryAndPath.js';
import { useThemeContext } from './useThemeContext.js';

/**
 * Use App Hooks
 *
 * @description This custom hook combines most of the hooks we have been
 * using in this application.
 *
 * @category Custom Hooks
 * @function
 * @name useAppHooks
 * @returns {UseAppHooksReturn}
 *
 */
export const useAppHooks = () => {
  
  const dispatch = useDispatch();
  const state = useSelector( reducerState => reducerState );
  let { path, pushedState, changePath } = useHistoryAndPath();
  const {theme, setVariable} = useThemeContext();
  
  useEffect(() => {
  
  }, [theme.screenWidth, path]);
  
  return {
    dispatch,
    theme,
    usersState: state.usersState,
    cardsState: state.cardsState,
    photosState: state.photosState,
    decksState: state.decksState,
    pathname: path,
    changePath: changePath,
    pathPushedState: pushedState,
  };
};

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
  mobileS: `(min-width: ${ sizes.mobileS }px)`,
  mobileM: `(min-width: ${ sizes.mobileM }px)`,
  mobileL: `(min-width: ${ sizes.mobileL }px)`,
  tablet: `(min-width: ${ sizes.tablet }px)`,
  laptop: `(min-width: ${ sizes.laptop }px)`,
  laptopL: `(min-width: ${ sizes.laptopL }px)`,
  desktop: `(min-width: ${ sizes.desktop }px)`,
};

/**
 * @typedef {string} Color
 */

/**
 * @typedef {object} UseAppHooksReturn
 *
 * @property {Dispatch}  dispatch
 * @property {Theme} theme
 * @property {UsersReducerState} usersState
 * @property {CardsState} cardsState
 * @property {PhotoReducerState} photosState
 * @property {{}} deckState
 * @property {History} history
 * @property {string} pathname
 * @property {ChangePath} changePath
 * @property {any} pathPushedState
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

