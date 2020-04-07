import React from "react";
import styled from "styled-components";
import theming from "styled-theming";
import PropTypes from "prop-types";

/**
 *   StyledSvg
 *
 *  @component
 *
 */
const StyledSvg = (props) => {
  
  const newProps = parseProps(props);
  
  
  
  return (
    <StyledSvgComponent {...newProps} >
      {props.children}
    </StyledSvgComponent>
  );
};

export const parseProps = (props = {}) => {
  const newProps = {};
  Object.keys(props).forEach(key => {
    if(key.includes("-")){
      const keyArray = key.split("-");
      let newKey;
      for(let i = 0; i < keyArray.length; i++){
        if(i === 0){
          newKey = keyArray[i];
        }else{
          newKey += keyArray[i].charAt(0).toUpperCase() +
            keyArray[i].slice(1);
        }
      }
      newProps[newKey] = props[key];
    }else{
      newProps[key] = props[key];
    }
    
  });
  
  return newProps;
};

export const overflow = theming("showOverflow", {
  show: "visible",
  hide: "hidden",
});

const StyledSvgComponent = styled.svg`
overflow: ${overflow};
`;

StyledSvg.propTypes = {};

export default StyledSvg;