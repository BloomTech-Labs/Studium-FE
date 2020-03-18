import React, {useEffect, useState} from "react";
import {useLogger} from "./useLogger.js";
import {getThemingRules} from "./themingRules.js";

export const THEMING_DEBUG_NAME = "Styled Theming";
/**
 * @typedef {object} UseStyledThemingRulesReturn
 * @property {CheckAllRules} checkAllRules
 * @property {SetRules} setRules
 */

/**
 *  Used Styled Theming Rules
 * @typedef {function} UseStyledThemingRules
 *
 * @param {ThemeRule[]} themeRules
 * @return UseStyledThemingRulesReturn
 *
 */
export const useStyledThemingRules = () => {
  
  const [rules, setRules] = useState();
  const logger = useLogger(THEMING_DEBUG_NAME);
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
   * @param {SetThemeVariable} setThemeVariable
   */
  const checkAllRules = (theme, appView, currentPath, setThemeVariable) => {
    const themeRules = getThemingRules();
    logger.logInfo("Checking theme rules.");
    themeRules.forEach(rule => {
      checkRule(rule, currentPath, theme, appView, setThemeVariable);
    });
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
   * @param {SetThemeVariable} setThemeVariable
   * @return void
   */
  const checkRule = (rule, currentPath, theme, appView, setThemeVariable) => {
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
          `${rule.themeVariable} has been set to ${rule.themeValue}.`,
        );
        setThemeVariable(rule.themeVariable, rule.themeValue);
      }
    }
    
    return {checkAllRules, setRules};
  };
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
