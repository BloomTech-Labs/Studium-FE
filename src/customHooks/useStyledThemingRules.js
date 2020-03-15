import React, {useState} from 'react';
import {useLogger} from './useLogger.js';
import {APP_PATHS} from './usePaths.js';

/**
 *  Used Styled Theming Rules
 * @typedef {function} UseStyledThemingRules
 *
 * @param {function} setThemeVariable
 * @return {object}
 *  @property {CheckAllRules} checkAllRules
 *  @property {function} setRules
 */
export const useStyledThemingRules = (setThemeVariable, themeRules) => {
  const [rules, setRules] = useState(themeRules || []);
  const logger = useLogger('useStyledThemingRules');

  /**
   *  Check all rules.
   *  @typedef CheckAllRules
   *  @description Checks all the rules against the current app view and
   *  path to see if any theming variables need to be changed.
   *
   * @function
   * @name checkAllRules
   * @param {Theme} theme
   * @param {AppView} appView
   * @param {string} currentPath
   * @returns void
   */
  const checkAllRules = (theme, appView, currentPath) => {
    rules.forEach(rule => {
      checkRule(rule, currentPath, theme, appView);
    });
  };

  /**
   * Check Rule
   *
   * @description Check the rule to see if the conditions have been met and set
   *   the value of the theme variable if they have been.
   * @function
   * @param rule
   * @param appView
   * @param currentPath
   * @param theme
   * @return void
   */
  const checkRule = (rule, currentPath, theme, appView) => {
    logger.logInfo(
      `Checking ${rule.themeVariable} rule for ${rule.themeValue}`
    );
    const appViewResult = checkView(rule, appView);
    const pathResult = checkPath(rule, currentPath);

    /**
     * if the rule requirements have been met then check if the value is set
     * or if needs to be set.
     */
    if (appViewResult && pathResult) {
      const valueSet = theme[rule.themeVariable] === rule.themeValue;

      // if value is not set. Set the variable to the correct value
      if (!valueSet) {
        logger.info(
          `${rule.themeVariable} has been set to ${rule.themeValue}.`
        );
        setThemeVariable(rule.themeVariable, rule.themeValue);
      }
    }
  };

  return {checkAllRules, setRules};
};

/**
 * Check Path
 *
 * @description Check if there is a path rule and if there is check if it
 *   matches current path.
 * @function
 * @param  rule
 * @param path
 * @return {boolean}
 */
const checkPath = (rule, path) => {
  return !rule.path || rule.path === path;
};

/**
 * Check View
 *
 * @description Check if there is a appView rule and if there is check if it
 *   matches current view.
 *
 * @param {ThemeRule} rule
 * @param {AppView} appView
 * @return {boolean}
 */
const checkView = (rule, appView) => {
  return !rule.appView || rule.appView === appView;
};

/**
 * Create Rule
 *
 * @description Creates a new theme rule and adds it to the current rules.
 * @function
 * @param  {THEME_VARIABLE} themeVariable
 * @param {THEMING_VALUE} themeValue
 * @param {string[]} paths
 * @param  {AppView} appView
 * @returns {ThemeRule}
 */
export const createRule = (themeVariable, themeValue, paths, appView) => {
  return {themeVariable, themeValue, paths, appView};
};

/**
 * @typedef {object} ThemeRule
 * @property {THEME_VARIABLE} themeVariable
 * @property {THEMING_VALUE} themeValue
 * @property {string[]} paths
 * @property {AppView} appView
 */
