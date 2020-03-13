import React from 'react';
import styled from 'styled-components';
import {Input, Form} from 'antd';
import PropTypes from 'prop-types';

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
  borderStyle = '1px solid #d9d9d9',
  inputWidth = '90%',
  bordered = 'false',
  borderRadius = 'small',
  label,
  error,
  ...props
}) => {
  if (bordered) {
    if (borderRadius === 'large') {
      // bordered input with large radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputLargeRadius borderStyle={borderStyle} {...props} />
        </StyledFormItem>
      );
    } else {
      // bordered input with regular radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputSmallRadius borderStyle={borderStyle} {...props} />
        </StyledFormItem>
      );
    }
  } else {
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
    text-align: left;
    width: ${props => props.inputWidth};
  }
`;

const StyledBorderBottom = styled.div`
  border-bottom: 1px solid gray;
`;

const StyledNoBorderAntdInput = styled(Input)`
  && {
    border: 0px;
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInputLargeRadius = styled(Input)`
  && {
    border: ${props => props.borderStyle};
    border-radius: ${props => props.theme.largeRadius};
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInputSmallRadius = styled(Input)`
  && {
    border: ${props => props.borderStyle};
    border-radius: ${props => props.theme.smallRadius};
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
  size: PropTypes.oneOf(['large', 'default', 'small']),
  borderRadius: PropTypes.oneOf(['large', 'small']),
  inputWidth: PropTypes.string,
  borderStyle: PropTypes.string,
};
