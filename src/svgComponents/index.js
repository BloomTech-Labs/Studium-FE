export {default as SvgAvatar} from "./SvgAvatar.js";
export {default as SvgBrainPic} from "./SvgBrainPic.js";
export {default as SvgBrainSynaps} from "./SvgBrainSynaps.js";
export {default as SvgSynapsFavicon} from "./SvgSynapsFavicon.js";
export {default as SvgSynapsLogoText} from "./SvgSynapsLogoText.js";
export {default as SvgSnapsOutline} from "./SvgSynapsOutline.js";
export {default as AnimatedSynaps} from "./AnimatedSynaps.js";
export {default as SvgBrainPaths} from "./SvgBrainPaths.js";

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
 * @property {string} height
 * @property {string} width
 * @property {string} fill
 * @property {string} background
 * @property {string} opacity
 * @property {string} strokeWidth
 * @property {string} stroke
 */