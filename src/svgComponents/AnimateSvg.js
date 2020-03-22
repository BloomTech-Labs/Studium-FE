import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *   AnimateSvg
 *
 *  @component
 *
 */
const AnimateSvg = (props) => {
  
  const getChilNodes = () => {
    return props.children.map(child => {
      console.log(child);
      return child
    })
  };
  
  return (
    <>
      {getChilNodes()}
    </>
  );
};

const StyledGroup = styled.g`
`;

const StyledPath = styled.path`

`;

const StyledNode = styled.path`

`;

AnimateSvg.propTypes = {};

export default AnimateSvg;