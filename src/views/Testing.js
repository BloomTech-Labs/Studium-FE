import React, { useState } from "react";
import styled from "styled-components";
import StyledInput from "../components/StyledInput";
import { Form } from "antd";

const Testing = () => {
  
  const [ value, setValue ] = useState( "" );
  return ( <StyledTesting>
    <h1>Testing</h1>
    <Form>
      <StyledInput bordered={ true } placeholder={ "Email" }
                   borderRadius={ "large" }
                   onChange={ ( e ) => {
                     setValue( e.target.value );
                   } } value={ value }/>
    </Form>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;