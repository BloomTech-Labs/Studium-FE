import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {parseProps} from "./StyledSvg.js";

/**
 *   StyledGroup
 *
 *  @component
 *
 */
const StyledGroup = (props) => {
  
  useEffect(() => {
    let childrenArray;
    
    if(Array.isArray(props.children)){
      childrenArray = props.children;
    }else{
      childrenArray = [props.children];
    }
    let ext;
    if(props.id.includes("nodes")){
      ext = "_node";
    }else{
      ext = "_path";
    }
    
    setChildren(childrenArray.map(child => {
      if(!child.props.id){
        return React.cloneElement(child,
          {
            ...props,
            onClick,
            group: newProps.group,
            key: child.props.id + ext,
            id: props.id + ext,
          },
        );
      }
      return child;
    }));
  }, []);
  
  const addConnected = (ref) => {
  
  };
  
  const getConnectedElements = (ref) => {
    if(ref.id.includes("_path")){
    
    }else{
    
    }
  };
  
  const onClick = (id) => {
    console.log(`${id} just clicked.`);
  };
  
  const [children, setChildren] = useState([]);
  const newProps = parseProps(props);
  return (
    <StyledSvgGroup {...newProps}>
      {children}
    </StyledSvgGroup>
  );
};

const StyledSvgGroup = styled.g`
`;

StyledGroup.propTypes = {};

export default StyledGroup;