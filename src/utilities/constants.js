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
  LARGE: 'large',
  MEDIUM: 'medium',
  NORMAL: 'normal',
  SMALL: 'small',
};

/**
 * @typedef {("APP_VIEW_DESKTOP" | "APP_VIEW_MOBILE")} AppView
 *
 */

/**
 * @type {{NAV_BAR_HEIGHT: number, MAX_DASHBOARD_CONTAINER_WIDTH: number,
 *   NAV_BAR_DARK: string, FOOTER_HEIGHT: number, BRAIN_PIC_DARK: string,
 *   NAV_BAR_LIGHT: string, BRAIN_PIC_LIGHT: string, PRIMARY_COLOR: string,
 *   SYNAPS_DARK: string, SECONDARY_DARKER1: string, SECONDARY_COLOR: string,
 *   SYNAPS_LIGHT: string}}
 */
export const THEME = {
  PRIMARY_COLOR: '#0d2545',
  SECONDARY_COLOR: '#A2D8C7',
  SECONDARY_DARKER1: '#4CB69F',
  
  NAV_BAR_HEIGHT: 75,
  FOOTER_HEIGHT: 70,
  
  NAV_BAR_DARK: '#0C2545',
  NAV_BAR_LIGHT: '#F6F5F3',
  
  SYNAPS_DARK: '#36405C',
  SYNAPS_LIGHT: '#FFFFFF',
  
  BRAIN_PIC_DARK: '#164167',
  BRAIN_PIC_LIGHT: '#e1ded7',
  
  MAX_DASHBOARD_CONTAINER_WIDTH: 1140,
};

/**
 * @typedef {Object} ThemeState
 * @property {Color} PRIMARY_COLOR
 * @property {Color} primaryColorB98C4
 * @property {Color} primaryColor86869A
 * @property {Color} primaryColor5C5F78
 * @property {Color} primaryColor36405C
 * @property {Color} primaryColor293046
 * @property {Color} primaryColor353544
 *
 * @property {Color} SECONDARY_COLOR
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
 * @property {number} NAV_BAR_HEIGHT
 * @property {number} FOOTER_HEIGHT
 *
 * @property {string} NAV_BAR_LIGHT
 * @property {string} NAV_BAR_DARK
 *
 * @property {THEMING_VALUES} NAV_STYLE
 *
 * @property {Color} BRAIN_PIC_DARK
 * @property {Color} BRAIN_PIC_LIGHT
 *
 */

export const APP_VIEW_MOBILE = 'APP_VIEW_MOBILE';
export const APP_VIEW_DESKTOP = 'APP_VIEW_DESKTOP';

/**
 * @typedef {string} APP_PATH
 */

/**
 * @typedef {object.<{APP_PATH}, string>} AppPaths
 */
export const APP_PATHS = {
  SIGN_UP_PATH: '/signup',
  SIGN_IN_PATH: '/signin',
  DASHBOARD_PATH: '/dashboard',
  CREATE_DECK_PATH: '/create/deck',
  PREVIEW_DECK_PATH: '/preview',
  TESTING: '/test',
  LANDING_PAGE: '/',
  QUIZ_MODE: '/quiz-mode',
};

/**
 * @type Sizes
 *
 */
export const SIZES = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};
/**
 * @category Utilities
 * @type {Devices}
 */
export const MEDIA_QUERIES = {
  mobileS: `(min-width: ${SIZES.mobileS}px)`,
  mobileM: `(min-width: ${SIZES.mobileM}px)`,
  mobileL: `(min-width: ${SIZES.mobileL}px)`,
  tablet: `(min-width: ${SIZES.tablet}px)`,
  laptop: `(min-width: ${SIZES.laptop}px)`,
  laptopL: `(min-width: ${SIZES.laptopL}px)`,
  desktop: `(min-width: ${SIZES.desktop}px)`,
};

/**
 * @typedef {function} Dispatch
 */

/**
 * @typedef {string} Color
 */

/**
 * @typedef {object} Sizes
 * @property {number} mobileS '320px',
 * @property {number} mobileM '375px',
 * @property {number} mobileL '425px',
 * @property {number} tablet '768px',
 * @property {number} laptop '1024px',
 * @property {number} laptopL '1440px',
 * @property {number} desktop '2560px',
 */

/**
 * @typedef {string} MediaQuery
 */

/**
 * @typedef {object} Devices
 * @property {MediaQuery} mobileS   320px
 * @property {MediaQuery} mobileM   375px
 * @property {MediaQuery} mobileL   425px
 * @property {MediaQuery} tablet    768px
 * @property {MediaQuery} laptop    1024px
 * @property {MediaQuery} laptopL   1440px
 * @property {MediaQuery} desktop   2560px
 */
