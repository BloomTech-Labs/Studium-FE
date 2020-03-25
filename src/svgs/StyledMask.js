import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {parseProps} from "./StyledSvg.js";

/**
 *   StyledMask
 *
 *  @component
 *
 */
const StyledMask = (props) => {
  const newProps = parseProps(props);
  newProps["fill"] = "white";
  const [children, setChildren] = useState([]);
  useEffect(() => {
    let newChildren;
    if(Array.isArray(props.children)){
      newChildren = props.children;
    }else{
      newChildren = [props.children];
    }
    setChildren(newChildren.map(child => {
      return (React.cloneElement(child,
        {key: props.id + "_mask", id: props.id + "_mask", fill: "white"},
      ));
    }));
    
  }, []);
  
  return (
    <SvgMask {...newProps}>
      {children}
    </SvgMask>
  );
};

const SvgMask = styled.mask`
`;

StyledMask.propTypes = {};

export default StyledMask;