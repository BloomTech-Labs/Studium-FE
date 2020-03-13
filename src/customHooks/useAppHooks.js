import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistoryAndPath } from './useHistoryAndPath.js';
import { useThemeContext } from './useThemeContext.js';
import { decksReducer } from '../reducers/decksReducer.js';

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
  const decksState = useSelector( state => state.decksReducer );
  const photosState = useSelector( state => state.photosState );
  let { path, pushedState, changePath } = useHistoryAndPath();
  //@type Theme
  const theme = useThemeContext();

  return {
    dispatch,
    theme,
    usersState,
    cardsState,
    photosState,
    decksState,
    pathname: path,
    changePath: changePath,
    pathPushedState: pushedState,
    
  };
};

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

