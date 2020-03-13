import React, { useState, useEffect } from 'react';
import { useDimensions } from './useDimensions.js';

/**
 * @type Sizes
 *
 */
const sizes = {
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
const devices = {
  mobileS: `(min-width: ${ sizes.mobileS }px)`,
  mobileM: `(min-width: ${ sizes.mobileM }px)`,
  mobileL: `(min-width: ${ sizes.mobileL }px)`,
  tablet: `(min-width: ${ sizes.tablet }px)`,
  laptop: `(min-width: ${ sizes.laptop }px)`,
  laptopL: `(min-width: ${ sizes.laptopL }px)`,
  desktop: `(min-width: ${ sizes.desktop }px)`,
};

/**
 * @type {Theme}
 */
export let themeState = {
  primaryColor: '#0d2545',
  primaryColorB98C4: '#b9b8c4',
  primaryColor86869A: '#86869a',
  primaryColor5C5F78: '#5C5F78',
  primaryColor36405C: '#36405c',
  primaryColor293046: '#293046',
  primaryColor353544: '#353544',
  
  secondaryColor: '#A2D8C7',
  secondaryColorEAF5F1: '#EAF5F1',
  secondaryColorD8EEE6: '#D8EEE6',
  secondaryColorC6E6DB: '#C6E6DB',
  secondaryColorB5DFD1: '#B5DFD1',
  secondaryColor92B2AA: '#92B2AA',
  secondaryColor798A87: '#798A87',
  
  white: '#FFFFFF',
  grayF1F2F2: '#F1F2F2',
  grayE6E7E8: '#E6E7E8',
  grayD1D3D4: '#D1D3D4',
  grayBCBEC0: '#BEBEC0',
  grayA7A9AC: '#A7A9AC',
  gray939598: '#939598',
  
  largeRadius: 14,
  smallRadius: 6,
  navBarTopHeight: 75,
  footerHeight: 50,
  screenHeight: window.innerHeight,
  screenWidth: window.outerWidth,
  
  devices,
  sizes,
  
};

/**
 * @typedef {string} Color
 */

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 */
export const useThemeContext = () => {
  const [ theme, setTheme ] = useState( themeState );
  const [ width, height ] = useDimensions();
  
  useEffect( () => {
    setTheme( { ...theme, screenHeight: height, screenWidth: width } );
  }, [ width, height ] );
  
  return theme;
  
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
 * @property {number} screenHeight
 * @property {number} screenWidth
 *
 * @property {Devices} devices
 * @property {Sizes} sizes
 *
 */