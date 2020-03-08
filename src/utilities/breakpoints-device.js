const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

/**
 * @category Utilities
 * @type {Devices}
 */
export const devices = {
  mobileS: `(min-width: ${ size.mobileS })`,
  mobileM: `(min-width: ${ size.mobileM })`,
  mobileL: `(min-width: ${ size.mobileL })`,
  tablet: `(min-width: ${ size.tablet })`,
  laptop: `(min-width: ${ size.laptop })`,
  laptopL: `(min-width: ${ size.laptopL })`,
  desktop: `(min-width: ${ size.desktop })`,
  desktopL: `(min-width: ${ size.desktopL })`,
};

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
 * @property {MediaQuery} desktopL  >2560px
 */
