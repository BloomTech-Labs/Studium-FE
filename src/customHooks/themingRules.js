import {APP_PATHS} from './usePaths.js';
import {createRule} from './useStyledThemingRules.js';

export const APP_VIEW_MOBILE = 'APP_VIEW_MOBILE';
export const APP_VIEW_DESKTOP = 'APP_VIEW_DESKTOP';

/**
 * @typedef {object.<THEME_VARIABLE, {string}>} THEMING_VARIABLES
 */
export const THEMING_VARIABLES = {
  NAV_STYLE: 'NAV_STYLE',
};

/**
 * @typedef {('NAV_STYLE')} THEME_VARIABLE
 */

/**
 * @typedef {object.<THEMING_VALUE, {string}>} THEMING_VALUES
 */
export const THEMING_VALUES = {
  HIDDEN: 'HIDDEN',
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

/**
 * @typedef {('DARK' | 'HIDDEN' | 'LIGHT')} THEMING_VALUE
 */

/**
 * @typedef {ThemeRule[]} themingRules
 */
export const getThemingRules = () => [
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.DARK,
    [APP_PATHS.PREVIEW_DECK_PATH, APP_PATHS.GAME_PATH, APP_PATHS.SIGN_IN_PATH],
    APP_VIEW_DESKTOP
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.LIGHT,
    [
      APP_PATHS.SIGN_UP_PATH,
      APP_PATHS.DASHBOARD_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.LANDING_PAGE,
    ],
    APP_VIEW_DESKTOP
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.DARK,
    [
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.DASHBOARD_PATH,
      APP_PATHS.GAME_PATH,
      APP_PATHS.PREVIEW_DECK_PATH,
    ],
    APP_VIEW_MOBILE
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.HIDDEN,
    [APP_PATHS.SIGN_UP_PATH, APP_PATHS.SIGN_IN_PATH, APP_PATHS.LANDING_PAGE],
    APP_VIEW_MOBILE
  ),
];
