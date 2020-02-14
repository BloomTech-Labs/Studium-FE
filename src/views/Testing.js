import React, { useState } from "react";
import styled from "styled-components";
import StyledInput from "../components/StyledInput";
import { Form } from "antd";
import StyledSearchBar from "../components/StyledSearchBar";

const Testing = () => {
  const onSearch = e => {
    debugger;
  };
  const [ value, setValue ] = useState( "" );
  return ( <StyledTesting>
    <h1>Testing</h1>
    <Form>
      <StyledSearchBar onSearch={ onSearch }/>
    </Form>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;