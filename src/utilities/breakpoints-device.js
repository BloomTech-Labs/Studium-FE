/**
 * @type Sizes
 *
 */
export const sizes = {
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
export const devices = {
  mobileS: `(min-width: ${ sizes.mobileS }px)`,
  mobileM: `(min-width: ${ sizes.mobileM }px)`,
  mobileL: `(min-width: ${ sizes.mobileL }px)`,
  tablet: `(min-width: ${ sizes.tablet }px)`,
  laptop: `(min-width: ${ sizes.laptop }px)`,
  laptopL: `(min-width: ${ sizes.laptopL }px)`,
  desktop: `(min-width: ${ sizes.desktop }px)`,
};

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
