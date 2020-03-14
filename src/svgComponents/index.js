export { default as SvgAvatar } from "./SvgAvatar.js";
export { default as SvgBrainPic } from "./SvgBrainPic.js";
export { default as SvgBrainSynaps } from "./SvgBrainSynaps.js";
export { default as SvgSynapsFavicon } from "./SvgSynapsFavicon.js";
export { default as SvgSynapsLogoText } from "./SvgSynapsLogoText.js";

/**
 * @typedef SvgComponent
 * @component
 * @param {SvgComponentProps} props
 * @returns
 * <SvgComponent>
 *   <svg>{props.children}</svg>
 * <SvgComponent>
 */

/**
 * @typedef {object} SvgComponentProps
 * @property {string} svgHeight
 * @property {string} svgWidth
 * @property {string} svgFill
 * @property {string} svgBackground
 * @property {string} svgOpacity
 */