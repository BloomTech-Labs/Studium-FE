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
  
  const [children, setChildren] = useState([]);
  useEffect(() => {
    let newChildren;
    if(Array.isArray(props.children)){
      if(props.id){
        newChildren = props.children.map(child => {
          return React.cloneElement(child, {id: props.id});
        });
      }else{
        newChildren = props.children;
      }
    }else{
      if(props.id){
        newChildren = [React.cloneElement(props.children, {id: props.id})];
      }else{
        newChildren = [props.children];
      }
    }
    
    setChildren(children);
  }, []);
  
  const newProps = parseProps(props);
  
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