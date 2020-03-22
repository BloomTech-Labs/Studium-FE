import React, {useState, useEffect, useContext} from "react";
import {AppHooksContext, useAppHooks} from "./useAppHooks.js";
import {useStyledThemingRules} from "./useStyledThemingRules.js";
import {
  THEMING_VALUES,
  THEMING_VARIABLES,
  APP_VIEW_DESKTOP,
  APP_VIEW_MOBILE,
} from "./themingRules.js";
import {useAppView} from "./useAppView.js";

export const THEME_DEBUG_NAME = "Theme";

/**
 * @type {Theme}
 */
export const themeState = {
  primaryColor: "#0d2545",
  primaryColorB98C4: "#b9b8c4",
  primaryColor86869A: "#86869a",
  primaryColor5C5F78: "#5C5F78",
  primaryColor36405C: "#36405c",
  primaryColor293046: "#293046",
  primaryColor353544: "#353544",
  
  secondaryColor: "#A2D8C7",
  secondaryColorEAF5F1: "#EAF5F1",
  secondaryColorD8EEE6: "#D8EEE6",
  secondaryColorC6E6DB: "#C6E6DB",
  secondaryColorB5DFD1: "#B5DFD1",
  secondaryColor92B2AA: "#92B2AA",
  secondaryColor798A87: "#798A87",
  
  white: "#FFFFFF",
  grayF1F2F2: "#F1F2F2",
  grayE6E7E8: "#E6E7E8",
  grayD1D3D4: "#D1D3D4",
  grayBCBEC0: "#BEBEC0",
  grayA7A9AC: "#A7A9AC",
  gray939598: "#939598",
  
  lightNavBarColor: "#E5E5E5",
  
  largeRadius: 14,
  smallRadius: 6,
  navBarTopHeight: 75,
  footerHeight: 50,
  
  navBarDark: "#0C2545",
  navBarLight: "#F6F5F3",
  
  synapsDark: "#36405C",
  synapsLight: "#FFFFFF",
  
  screenHeight: 375,
  
};

/**
 * @typedef {("APP_VIEW_DESKTOP" | "APP_VIEW_MOBILE")} AppView
 *
 */

/**
 * @typedef {Object} Theme
 * @property {Color} primaryColor
 * @property {Color} primaryColorB98C4
 * @property {Color} primaryColor86869A
 * @property {Color} primaryColor5C5F78
 * @property {Color} primaryColor36405C
 * @property {Color} primaryColor293046
 * @property {Color} primaryColor353544
 *
 * @property {Color} secondaryColor
 * @property {Color} secondaryColorEAF5F1
 * @property {Color} secondaryColorD8EEE6
 * @property {Color} secondaryColorC6E6DB
 * @property {Color} secondaryColorB5DFD1
 * @property {Color} secondaryColor92B2AA
 * @property {Color} secondaryColor798A87
 *
 * @property {Color} white
 * @property {Color} grayF1F2F2
 * @property {Color} grayE6E7E8
 * @property {Color} grayD1D3D4
 * @property {Color} grayBCBEC0
 * @property {Color} grayA7A9AC
 * @property {Color} gray939598
 *
 * @property {number} largeRadius
 * @property {number} smallRadius
 * @property {number} navBarTopHeight
 * @property {number} footerHeight
 *
 * @property {string} navBarLight
 * @property {string} navBarDark
 *
 * @property {THEMING_VALUES} NAV_STYLE
 *
 * @property {number} screenHeight
 *
 */

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 * @returns {object}
 * @property {Theme} theme
 * @property {SetThemeVariable} setThemeVariable
 */

/**
 *@typedef {Object.<string, {string}>} ThemingRules
 */
const themingRules = {
  [THEMING_VARIABLES.NAV_STYLE]: THEMING_VALUES.DARK,
};

export const useThemeContext = () => {
  
  const {getLogger, setRules, appView, path, setHookVariable, themingRules} = useContext(
    AppHooksContext);
  const {checkAllRules} = useStyledThemingRules();
  const logger = getLogger(THEME_DEBUG_NAME);
  
  /**
   * Log new theme to the console on change.
   */
  useEffect(() => {
    logger.logInfo("Theme updated.");
    logger.logObject(themingRules);
  }, [themingRules]);
  
  const setThemeVariable = (variableName, value) => {
    logger.logInfo(`Setting ${variableName} to ${value}`);
    const newThemeRules = {...themingRules, [variableName]: value};
    logger.logObject(newThemeRules, "Attempting to update theme to.");
    setHookVariable("themingRules", newThemeRules);
  };
  
  useEffect(() => {
    
    logger.logInfo("Either the path or the app view changed so we need to re" +
      " evaluate app theme.");
    
    checkAllRules(themingRules, appView, path, setThemeVariable);
  }, [appView, path]);
  
};

export const useTheme = () => {
  
  const {getLogger, appView, path} = useAppHooks("Use Theme");
  const [theme, setTheme] = useState(themeState);
  const {checkAllRules} = useStyledThemingRules();
  
  const logger = getLogger(THEME_DEBUG_NAME);
  logger.logInfo("Theme Provider was generated.");
  /**
   * @typedef SetThemeVariable
   * @function
   * @name {string}setThemeVariable
   * @param {string | number} name
   * @param value
   * @return void
   */
  useAppView();
  
  const setThemeVariable = (name, value) => {
    logger.logInfo(`Set new theme state: [${name}]: ${value} `);
    const newTheme = {...theme, [name]: value};
    logger.logObject(newTheme);
    setTheme({...theme, [name]: value});
  };
  
  useEffect(() => {
    if(appView && path){
      checkAllRules(theme, appView, path, setThemeVariable());
    }
    
  }, [appView, path]);
  
  return {theme, setThemeVariable};
};
