import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {parseProps} from "./StyledSvg.js";

/**
 *   StyledMainGroup
 *
 *  @component
 *
 */
const StyledMainGroup = (props) => {
  
  const [nodes, setNodes] = useState([]);
  const [paths, setPaths] = useState([]);
  const newProps = parseProps(props);
  
  useEffect(() => {
    let childrenArray;
    
    if(Array.isArray(props.children)){
      childrenArray = props.children;
    }else{
      childrenArray = [props.children];
    }
    let nodeChildren = [];
    let pathChildren = [];
    childrenArray.forEach(child => {
      
      const newChild = React.cloneElement(child,
        {"getConnectedElements": getConnectedElements},
      );
      if(child.props.id.includes("nodes")){
        nodeChildren.push(newChild);
      }else{
        pathChildren.push(newChild);
      }
    });
    setPaths(pathChildren);
    setNodes(nodeChildren);
  }, []);
  
  const getChildren = () => {
    return ([...nodes, ...paths]);
  };
  
  const getConnectedElements = (ref) => {
    if(ref.id.includes("_path")){
      nodes.forEach(node => {
        node.addConnected(ref);
      });
    }else{
      paths.forEach(path => {
        path.addConnected(ref);
      });
    }
  };
  
  return (
    <StyledSvgGroup {...newProps}>
      {getChildren()}
    </StyledSvgGroup>
  );
};

const StyledSvgGroup = styled.g`
`;

StyledMainGroup.propTypes = {};

export default StyledMainGroup;