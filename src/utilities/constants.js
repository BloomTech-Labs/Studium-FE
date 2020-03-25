/**
 * @typedef {number} LogType
 *
 */

/**
 * @typedef {object} LOG_TYPES
 * @param {logType} INFO
 * @param {logType} WARNING
 * @param {logType} ERROR
 * @param {logType} OBJECT
 */
export const LOG_TYPES = {
  VERBOSE: 1,
  INFO: 2,
  WARNING: 4,
  ERROR: 5,
  OBJECT: 6,
  PLAIN: 3,
};

/**
 * @typedef {string} DEBUG_LOG_SIZE
 *
 */

/**
 * @typedef {object} DEBUG_LOG_SIZES
 * @param {DEBUG_LOG_SIZE} LARGE
 * @param {DEBUG_LOG_SIZE} MEDIUM
 * @param {DEBUG_LOG_SIZE} NORMAL
 * @param {DEBUG_LOG_SIZE} SMALL
 */
export const DEBUG_LOG_SIZES = {
  LARGE: "large",
  MEDIUM: "medium",
  NORMAL: "normal",
  SMALL: "small",
};

/**
 * @typedef {("APP_VIEW_DESKTOP" | "APP_VIEW_MOBILE")} AppView
 *
 */

/**
 * @type {ThemeState}
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

export const APP_VIEW_MOBILE = "APP_VIEW_MOBILE";
export const APP_VIEW_DESKTOP = "APP_VIEW_DESKTOP";

/**
 * @typedef {object.<{APP_PATH}, string>} AppPaths
 */
export const APP_PATHS = {
  SIGN_UP_PATH: "/signup",
  SIGN_IN_PATH: "/signin",
  DASHBOARD_PATH: "/dashboard",
  CREATE_DECK_PATH: "/create/deck",
  PREVIEW_DECK_PATH: "/preview",
  GAME_PATH: "/game",
  TESTING: "/test",
  LANDING_PAGE: "/",
};