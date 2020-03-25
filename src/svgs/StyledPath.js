import React, {useState} from "react";
import styled from "styled-components";
import theming from "styled-theming";
import PropTypes from "prop-types";
import {parseProps} from "./StyledSvg.js";

/**
 *   StyledPath
 *
 *  @component
 *
 */
const StyledPath = (props) => {
  const newProps = parseProps(props);
  newProps.fill = "red";
  newProps.stroke = "green";
  const [active, setActive] = useState(false);
  
  return (
    <SvgPath {...newProps} onClick={(e) => props.onClick(props.id)}>
      {props.children}
    </SvgPath>
  );
};

const SvgPath = styled.path`


.active {
  stroke-opacity:1;
  stroke-width: 1;
  fill-opacity: 1;
  animation: dash 10s;

@keyframes dash {
    0% {
    
  }
    100% {
    
  
  }
  }
}
`;

StyledPath.propTypes = {};

export default StyledPath;