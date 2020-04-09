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
  value,
  width = '90%',
  bordered = 'false',
  borderRadius = 'small',
  borderStyle,
  label,
  error,
  ...props
}) => {
  console.log('border style from formInput|||', borderStyle);
  if (bordered) {
    if (borderRadius === 'large') {
      // bordered input with large radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputLargeRadius
            style={{border: borderStyle}}
            value={value}
            {...props}
          />
        </StyledFormItem>
      );
    } else {
      // bordered input with regular radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputSmallRadius
            style={{border: borderStyle}}
            value={value}
            {...props}
          />
        </StyledFormItem>
      );
    }
  } else {
    // no border input
    return (
      <StyledFormItem label={label}>
        <StyledBorderBottom>
          <StyledNoBorderAntdInput
            style={{border: borderStyle}}
            value={value}
            {...props}
          />
        </StyledBorderBottom>
      </StyledFormItem>
    );
  }
};

const StyledFormItem = styled(Form.Item)`
  && {
    .ant-form-item-label {
      padding: 0 0 0;
    }
    .ant-form-item-label {
      padding: 0 0 0 0;
      line-height: 1;
    }
    text-align: left;
    width: ${props => props.width};
    background-color: transparent;
    border: ${props => props.borderStyle};
  }
`;

const StyledBorderBottom = styled.div`
  border-bottom: ${props => props.borderStyle};
`;

const StyledNoBorderAntdInput = styled(Input)`
  && {
    border: 0px;
    .ant-form-item-label {
      padding: 0 0 0;
    }
    :focus {
      box-shadow: none;
    }
    background-color: transparent;
  }
`;

const StyledAntdInputLargeRadius = styled(Input)`
  && {
    border-radius: ${props => props.theme.largeRadius};
    .ant-form-item-label {
      padding: 0 0 0;
    }
    :focus {
      box-shadow: none;
    }
    background-color: transparent;
    border: ${props => props.borderStyle};
  }
`;

const StyledAntdInputSmallRadius = styled(Input)`
  && {
    border-radius: ${props => props.theme.smallRadius};
    .ant-form-item-label {
      padding: 0 0 0;
    }

    :focus {
      box-shadow: none;
    }
    background-color: transparent;
    border: ${props => props.borderStyle};
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
};
