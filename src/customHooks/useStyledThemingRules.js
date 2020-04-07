import React, {useEffect, useState} from "react";
import {getThemingRules} from "./themingRules.js";

export const THEMING_DEBUG_NAME = "Styled Theming";

/**
 *  Used Styled Theming Rules
 * @typedef {function} UseStyledThemingRules
 *
 * @return {checkAllRules}
 *
 */
export const useStyledThemingRules = (getLogger) => {
  
  const [rules, setRules] = useState();
  const logger = getLogger(THEMING_DEBUG_NAME);
  logger.logInfo("Styled Theming running");
  
  useEffect(() => {
    
    logger.logInfo("Setting the theming rules.");
    const themeRules = getThemingRules();
    themeRules.forEach(rule => {
      logger.logInfo(
        `Rule: ${rule.themeVariable} -> ${rule.appView} -> ${rule.paths} -> ${rule.themeValue}`,
      );
    });
    
    setRules(themeRules);
  }, []);
  
  /**
   *  Check all rules.
   *  @typedef {function} CheckAllRules
   *  @name checkAllRules
   *  @description Checks all the rules against the current app view and
   *  path to see if any theming variables need to be changed.
   *
   * @param {Theme} theme
   * @param {AppView} appView
   * @param {APP_PATH} currentPath
   * @param {function} changeTheme
   */
  const checkAllRules = (theme, appView, currentPath, changeTheme) => {
    
    const themeRules = getThemingRules();
    const themeChanges = [];
    logger.logInfo("Checking theme rules.");
    themeRules.forEach(rule => {
      const change = checkRule(rule, currentPath, theme, appView);
      if(change){
        themeChanges.push(change);
      }
    });
    if(themeChanges.length > 0){
      changeTheme(themeChanges);
    }
  };
  
  /**
   * Check Rule
   *
   * @description Check the rule to see if the conditions have been met and
   *   set the value of the theme variable if they have been.
   * @function
   * @param {ThemeRule} rule
   * @param {AppView} appView
   * @param {APP_PATH} currentPath
   * @param {Theme} theme
   * @return {ThemeRule | boolean}
   */
  const checkRule = (rule, currentPath, theme, appView) => {
    const appViewResult = checkView(rule, appView);
    const pathResult = checkPath(rule, currentPath);
    
    /**
     * if the rule requirements have been met then check if the value is set
     * or if needs to be set.
     */
    if(appViewResult && pathResult){
      const valueSet = theme[rule.themeVariable] === rule.themeValue;
      
      // if value is not set. Set the variable to the correct value
      if(!valueSet){
        logger.logInfo(
          `${rule.themeVariable} should be set to ${rule.themeValue}.`,
        );
        logger.logObject(rule);
        return rule;
      }
      return false;
    }
  };
  
  return checkAllRules;
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
  return rule.paths.length === 0 || rule.paths.includes(path);
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
