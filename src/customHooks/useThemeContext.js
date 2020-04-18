import React, {useContext, useEffect, useState} from 'react';
import {AppHooksContext} from './useAppHooks.js';
import {useStyledThemingRules} from './useStyledThemingRules.js';
import {useHistory} from 'react-router-dom';
import {DEFAULT_THEME_RULE_VALUES} from './themingRules.js';
import {ThemeContext} from 'styled-components';
import {useComparPrevContext} from './useComparPrevContext.js';
import {SYNAPS_CONFIG} from '../synapsConfig.js';
import {THEME} from '../utilities/constants.js';

export const THEME_DEBUG_NAME = 'Theme';

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 * @returns {object}
 */
export const useThemeRules = () => {
  let baseConfig = DEFAULT_THEME_RULE_VALUES;
  if(localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + '/themeRules')){
    baseConfig = JSON.parse(
      localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + '/themeRules'));
  }
  const [themeRules, setThemeRules] = useState(baseConfig);
  
  const changeTheme = (value) => {
    setThemeRules(value);
  };
  
  useEffect(() => {
    localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + '/themeRules',
      JSON.stringify(themeRules),
    );
  }, [themeRules]);
  
  /**
   * @typedef {object} UseThemeRulesReturn
   * @property {ThemeRuleValues} themeRules
   * @property {ThemeRuleValues} themeRules
   */
  return {themeRules, changeTheme, themeState: THEME};
  
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  const {changeTheme, themeState, ...themeRules} = theme;
  const {hooks} = useContext(AppHooksContext);
  const history = useHistory();
  const {compareContext} = useComparPrevContext(
    THEME_DEBUG_NAME, themeRules);
  const checkAllRules = useStyledThemingRules();
  
  const changeRules = (changes) => {
    const newRules = {...themeRules};
    changes.forEach(rule => {
      newRules[rule.themeVariable] = rule.themeValue;
    });
    changeTheme(newRules);
  };
  
  useEffect(() => {
    
    checkAllRules(themeRules, hooks.appView, history.location.pathname,
      changeRules,
    );
  }, [hooks.appView, history.location.pathname]);
  
  useEffect(() => {
    
    compareContext(themeRules);
  }, [theme]);
  
};
