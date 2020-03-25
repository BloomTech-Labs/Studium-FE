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
  
  const [svg, setSvg] = useState();
  
  useEffect((() => {
  
  }), []);
  
  return (
    <BrainSynaps id={"from app"}/>
  );
}

const StyledSvgContainer = styled.svg`

  .snaps-outline {
  stroke: #89c7ff;
  stroke-opacity:1;
  stroke-width: 1;
  opacity: .6;
  animation: dash 10s infinite;

@keyframes dash {
    0% {
      stroke-dasharray: 50, 50;
    stroke-dashoffset: 0;
  }
    100% {
      stroke-dasharray: 70, 70;
    stroke-dashoffset: 1500;
  }
  }
}

.bubbles {
  fill: red;
  position: absolute;
  transform: translate(-6px,-1px);
  animation: glow 10s infinite;

@keyframes glow {
    0% {
      fill: #2a36ff;
    
  }
    
    100% {
      fill: #bcc8ff;
  }
  }
}

`;

const StyledPath1 = theming("animated", {});

/**
 * @type withSvgContainer
 */
export default withSvgContainer(SecondAnimatedSynapsComponent);
