import React, {useState, useEffect, useContext} from "react";
import {AppHooksContext, useAppHooks} from "./useAppHooks.js";
import {useStyledThemingRules} from "./useStyledThemingRules.js";
import {
  THEMING_VALUES,
  THEMING_VARIABLES,
  APP_VIEW_DESKTOP,
  APP_VIEW_MOBILE, DEFAULT_THEME_RULE_VALUES,
} from "./themingRules.js";
import {useAppView} from "./useAppView.js";
import {ThemeContext} from "styled-components";
import {useComparPrevContext} from "./useComparPrevContext.js";
import {SYNAPS_CONFIG} from "../synapsConfig.js";

export const THEME_DEBUG_NAME = "Theme";

/**
 * @type {Theme}
 */
export const THEME = {
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
  
  brainPicDark: "#36405C",
  brainPicLight: "#EEECE8",
  
};

/**
 * @typedef {("APP_VIEW_DESKTOP" | "APP_VIEW_MOBILE")} AppView
 *
 */

/**
 * @typedef {Object} ThemeState
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
 * @property {Color} brainPicDark
 * @property {Color} brainPicLight
 *
 */

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 * @returns {object}
 */
export const useThemeRules = (getLogger) => {
  const logger = getLogger(THEME_DEBUG_NAME);
  let baseConfig = DEFAULT_THEME_RULE_VALUES;
  if(localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules")){
    baseConfig = JSON.parse(
      localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules"));
  }
  const [themeRules, setThemeRules] = useState(baseConfig);
  
  const changeTheme = (value) => {
    logger.logVerbose("Changing Theme Rules");
    
    setThemeRules(value);
  };
  
  useEffect(() => {
    localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules",
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
  const {path, appView, getLogger} = hooks;
  const {compareContext} = useComparPrevContext(
    THEME_DEBUG_NAME, {themeRules, appView, path});
  const checkAllRules = useStyledThemingRules();
  const logger = getLogger(THEME_DEBUG_NAME);
  
  const changeRules = (changes) => {
    const newRules = {...themeRules};
    logger.logVerbose(`Changing Theme Rules`);
    changes.forEach(rule => {
      logger.logVerbose(`${rule.themeVariable} --> ${rule.themeValue}`);
      newRules[rule.themeVariable] = rule.themeValue;
    });
    changeTheme(newRules);
  };
  
  useEffect(() => {
    compareContext({themeRules, appView, path});
    checkAllRules(themeRules, appView, path, changeRules);
  }, [appView, path]);
  
};
