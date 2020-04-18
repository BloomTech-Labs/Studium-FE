import React from 'react';
import styled from 'styled-components';
import {Input, Form} from 'antd';
import PropTypes from 'prop-types';
import {APP_VIEW_DESKTOP, APP_VIEW_MOBILE} from '../../../utilities/constants';

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
  appView,
  value,
  width = '90%',
  bordered = 'false',
  borderRadius = 'small',
  borderStyle,
  label,
  error,
  placeholder,
  ...props
}) => {
  if (bordered) {
    if (borderRadius === 'large') {
      // bordered input with large radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputLargeRadius
            appView={appView}
            width={width}
            borderStyle={borderStyle}
            value={value}
            placeholder={placeholder}
            {...props}
          />
        </StyledFormItem>
      );
    } else {
      // bordered input with regular radius
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputSmallRadius
            appView={appView}
            width={width}
            borderStyle={borderStyle}
            value={value}
            placeholder={placeholder}
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
            appView={appView}
            width={width}
            borderStyle={borderStyle}
            value={value}
            placeholder={placeholder}
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
    .ant-input {
      width: ${props => props.width};
      ${props => (props.appView === APP_VIEW_DESKTOP ? 'height: 38px;' : '')}
      ${props =>
        props.appView === APP_VIEW_DESKTOP
          ? 'border: 1px solid #36405C;'
          : ''}
      background-color: transparent;
      font-style: normal;
      font-weight: 600;
      font-size: 19px;
      line-height: 24px;
    }
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
    width: ${props => props.width};
    ${props => (props.appView === APP_VIEW_DESKTOP ? 'height: 38px;' : '')}
    background-color: transparent;
    border: ${props => props.borderStyle};
    ${props =>
      props.appView === APP_VIEW_DESKTOP ? 'border: 1px solid #36405C;' : ''}
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
  }
`;

const StyledAntdInputSmallRadius = styled(Input)`
  && {
    border-radius: ${props =>
      props.appView === 'APP_VIEW_MOBILE' ? props.theme.smallRadius : '0px'};
    .ant-form-item-label {
      padding: 0 0 0;
    }

    :focus {
      box-shadow: none;
    }
    width: ${props => props.width};
    ${props => (props.appView === APP_VIEW_DESKTOP ? 'height: 38px;' : '')}
    background-color: transparent;
    border: ${props => props.borderStyle};
    ${props =>
      props.appView === APP_VIEW_DESKTOP ? 'border: 1px solid #36405C;' : ''}
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
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
