import React, {useEffect, useRef, useState} from "react";
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
  const pathRef = useRef(null);
  const [active, setActive] = useState(false);
  const [length, setLength] = useState(0);
  const [bb, setBb] = useState(0);
  
  const handleClick = () => {
    setActive(true);
  };
  
  const addConnected = (box) => {
    debugger;
  };
  
  //  if(!props.id.includes("mask")){
  //    newProps.fill = "gray";
  //    newProps.stroke = "blue";
  //    newProps["ref"] = React.createRef();
  //  }
  useEffect(() => {
    
    const length = pathRef.current.getTotalLength();
    setLength(length);
    setBb(pathRef.current.getBBox());
  }, []);
  
  useEffect(() => {
    props.getConnectedElements(bb);
  }, [bb]);
  
  return (
    <SvgPath {...newProps} className={active ? "active" : "not-active"}
             ref={pathRef} onClick={(e) => props.onClick(props.id)}>
      {props.children}
    </SvgPath>
  );
};

const SvgPath = styled.path`
.not-active {
  stroke-dashoffset: 100%;
  stroke-dasharray: 100%;
}

.active {
  stroke-dashoffset: 0%;
  stroke-dasharray: 100%;

}

@keyframes dash {
    0% {
    stroke-dashoffset: 100%;
  }
    100% {
    stroke-dashoffset: 0;
  }
  }

`;

StyledPath.propTypes = {};

export default StyledPath;