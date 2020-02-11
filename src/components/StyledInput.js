import React from "react";
import styled from "styled-components";
import { Input, Form } from "antd";
import PropTypes from "prop-types";

const StyledInput = ( { bordered = false, borderRadius, label, ...props } ) => {
  if( bordered ){
    return ( <StyledFormItem label={ label }>
      <StyledAntdInput { ...props } borderRadius={ borderRadius }/>
    </StyledFormItem> );
  }else{
    return ( <StyledFormItem label={ label }>
      <StyledBorderBottom>
        <StyledNoBorderAntdInput { ...props }>
        
        </StyledNoBorderAntdInput>
      </StyledBorderBottom>
    </StyledFormItem> );
  }
};
const StyledFormItem = styled( Form.Item )`
  && {
    text-align: left;
    width: 90%;
  }
`;

const StyledBorderBottom = styled.div`
  border-bottom: 1px solid gray;
`;

const StyledNoBorderAntdInput = styled( Input )`
  &&{
    border: 0px;
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInput = styled( Input )`
  &&{
    border-radius: ${ props => props.borderRadius ? props.borderRadius + "px" :
  +"6px" };
    :focus {
      box-shadow: none;
    }
  }
`;

StyledInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  bordered: PropTypes.bool,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf( [ "large", "default", "small" ] ),
  borderRadius: PropTypes.number
  
};

export default StyledInput;