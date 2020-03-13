import React from "react";
import PropTypes from "prop-types";
import { SvgContainer } from "../SvgContainer/SvgContainer.js";

/**
 *  Synaps Brain SVG
 *
 * @description Displays a svg of the synaps brain adjustable styles.
 *
 *  @component
 *  @example
 *  return (
 *    <SynapsBrain
 *       svg={svg}
 *       zIndex={ 1 }
 *       position={ 'absolute' }
 *       backgroundColor={ theme.primaryColor }
 *       color={ '#164172' }
 *       opacity={ 1 }
 *       strokeColor={ theme.primaryColor }
 *       viewBox={ '225 25 400 400' }
 *    />
 *    )
 */
export const SynapsBrain = ( props ) => {
  
  return <h1>Synaps Brain</h1>;
};

SynapsBrain.propTypes = {
  position: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  color: PropTypes.string,
  strokeColor: PropTypes.string,
  stokeWidth: PropTypes.string,
  viewBox: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};
