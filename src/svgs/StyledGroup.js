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
    const newProps = parseProps(props);
    if(!newProps.group){
      if(newProps.id === "paths"){
        newProps.group = "paths";
      }else if(newProps.id === "nodes"){
        newProps.group = "nodes";
      }
    }
    
    if(Array.isArray(props.children)){
      childrenArray = props.children;
    }else{
      childrenArray = [props.children];
    }
    setChildren(childrenArray.map(child => {
      return React.cloneElement(child,
        {onClick, group: newProps.group, key: newProps.id},
      );
    }));
  }, []);
  
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