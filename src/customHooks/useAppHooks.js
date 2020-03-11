import React, { useEffect, useState } from 'react';
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
 *  @function
 * @name useAppHooks
 * @returns {UseAppHooksReturn}
 *
 */
export const useAppHooks = () => {
  
  const dispatch = useDispatch();
  const usersState = useSelector( state => state.usersState );
  const cardsState = useSelector( state => state.cardsState );
  const photosState = useSelector( state => state.photosState );
  const { path, pushedState, changePath } = useHistoryAndPath();
  const theme = useThemeContext();
  
  return {
    dispatch,
    theme,
    usersState,
    cardsState,
    photosState,
    pathname: path,
    changePath: changePath,
    pathPushedState: pushedState,
  };
};

/**
 * @typedef {object} UseAppHooksReturn
 *
 * @property {Dispatch}  dispatch
 * @property {Dispatch} theme
 * @property {UsersReducerState} usersState
 * @property {CardsState} cardsState
 * @property {PhotoReducerState} photosState
 * @property {History} history
 * @property {AppCookies} cookies
 * @property {SetCookie} setCookie
 * @property {RemoveCookie} removeCookie
 * @property {string} pathname
 * @property {ChangePath} changePath
 * @property {any} pathPushedState
 */

/**
 * @typedef SetCookie
 * @function
 * @param {string} key
 * @param {any} value
 */

/**
 * @typedef RemoveCookie
 * @function
 * @param {string} key
 */

/**
 * @typedef {Object} AppCookies
 * @property {UsersReducerState} usersState
 * @property {PhotoReducerState} photosState
 * @property {CardsState} cardsState
 *
 */