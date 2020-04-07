import React, {useEffect, useState} from "react";
import withSvgContainer from "./withSvgContainer.js";
import styled from "styled-components";
import theming from "styled-theming";
import BrainSynaps from "../svgs/BrainSynaps.js";

/**
 * Svg Brain Pic
 * @component
 * @param {SvgComponentProps} props
 * @returns SvgComponent
 */
function SecondAnimatedSynapsComponent(props){
  
  useEffect((() => {
  
  }), []);
  
  return (
    <BrainSynaps id={"from app"}/>
  );
}

/**
 * @type withSvgContainer
 */
export default withSvgContainer(SecondAnimatedSynapsComponent);
