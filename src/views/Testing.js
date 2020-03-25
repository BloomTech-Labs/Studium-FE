import React from "react";
import styled from "styled-components";
import SecondAnimatedSynapsComponent
  from "../svgComponents/SecondAnimatedSynapsComponent.js";

export const Testing = () => {
  return (<StyledTesting>
    <SecondAnimatedSynapsComponent width={"1000px"} height={"1000px"}/>
  </StyledTesting>);
  
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 800px;
`;
