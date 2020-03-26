import React from "react";
import styled from "styled-components";
import {Input, Form} from "antd";
import PropTypes from "prop-types";

/**
 * Form Input
 *
 * @component
 * @example
 *
 * import React, {useState} from 'react';
 *
 * const [inputValue, setValue] = useState('');
 * const handleChange = (e) => {
 *   setValue(e.target.value);
 * };
 *  return ( <FormInput onChange={handleChange} value={inputValue} /> );
 *
 */
export const FormInput = ({
  width = "90%",
  bordered = "false",
  borderRadius = "small",
  label,
  error,
  ...props
}) => {
  if(bordered){
    if(borderRadius === "large"){
      // bordered input with large radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputLargeRadius {...props} />
        </StyledFormItem>
      );
    }else{
      // bordered input with regular radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputSmallRadius {...props} />
        </StyledFormItem>
      );
    }
  }else{
    // no border input
    return (
      <StyledFormItem label={label}>
        <StyledBorderBottom>
          <StyledNoBorderAntdInput {...props} />
        </StyledBorderBottom>
      </StyledFormItem>
    );
  }
};

const StyledFormItem = styled(Form.Item)`
  && {
    .ant-form-item-label{
      padding: 0 0 0;
    }
    text-align: left;
    width: ${props => props.width};
  }
`;

const StyledBorderBottom = styled.div`
  border-bottom: 1px solid gray;
`;

const StyledNoBorderAntdInput = styled(Input)`
  && {
    border: 0px;
    .ant-form-item-label{
      padding: 0 0 0;
    }
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInputLargeRadius = styled(Input)`
  && {
    border-radius: ${props => props.theme.largeRadius};
    .ant-form-item-label{
      padding: 0 0 0;
    }
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInputSmallRadius = styled(Input)`
  && {
    border-radius: ${props => props.theme.smallRadius};
    .ant-form-item-label{
      padding: 0 0 0;
    }
    
    :focus {
      box-shadow: none;
    }
  }
`;

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  bordered: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["large", "default", "small"]),
  borderRadius: PropTypes.oneOf(["large", "small"]),
};
