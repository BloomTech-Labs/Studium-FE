import React, {useContext, useEffect, useState} from 'react';
import {AppHooksContext} from './useAppHooks.js';
import {useStyledThemingRules} from './useStyledThemingRules.js';
import {useHistory} from 'react-router-dom';
import {DEFAULT_THEME_RULE_VALUES} from './themingRules.js';
import {ThemeContext} from 'styled-components';
import {SYNAPS_CONFIG} from '../synapsConfig.js';
import {
  APP_VIEW_DESKTOP, APP_VIEW_MOBILE, SIZES, THEME,
} from '../utilities/constants.js';

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 * @returns {object}
 */
export const useThemeRules = () => {
  let baseConfig = DEFAULT_THEME_RULE_VALUES;
  if (localStorage.getItem(
    SYNAPS_CONFIG.localStorageBasePath + '/themeRules')) {

    let storedRules = JSON.parse(
      localStorage.getItem(
        SYNAPS_CONFIG.localStorageBasePath + '/themeRules'));
    if (typeof storedRules === 'object') {
      Object.keys(storedRules).forEach(key => {
        if (baseConfig[key]) {
          baseConfig[key] = storedRules[key];
        }
      });
    }
  }
  baseConfig['appView'] = window.innerWidth < SIZES.tablet ? APP_VIEW_MOBILE :
    APP_VIEW_DESKTOP;
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
  const {changeTheme, themeState, ...themeRules} = useContext(ThemeContext);
  const {hooks} = useContext(AppHooksContext);
  const history = useHistory();
  const checkAllRules = useStyledThemingRules();

  const changeRules = (changes) => {

    const newRules = {...themeRules};
    changes.forEach(rule => {
      newRules[rule.themeVariable] = rule.themeValue;
    });
    if (hooks.appView) {
      newRules['appView'] = hooks.appView;
    }
    changeTheme(newRules);
  };

  useEffect(() => {

    checkAllRules(themeRules, hooks.appView, history.location.pathname,
      changeRules,
    );
  }, [hooks.appView, history.location.pathname]);

};
