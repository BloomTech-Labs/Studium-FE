import React from 'react';
import styled from 'styled-components';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

const StyledInput = ({
  bordered = 'false',
  borderRadius = 'small',
  label,
  ...props
}) => {
  if (bordered) {
    if (borderRadius === 'large') {
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputLargeRadius {...props} />
        </StyledFormItem>
      );
    } else {
      return (
        <StyledFormItem label={label}>
          <StyledAntdInputSmallRadius {...props} />
        </StyledFormItem>
      );
    }
  } else {
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
    width: 90%;
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
    border-radius: ${props => props.theme.largeRadius};
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdInputSmallRadius = styled(Input)`
  && {
    border-radius: ${props => props.theme.smallRadius};
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
  size: PropTypes.oneOf(['large', 'default', 'small']),
  borderRadius: PropTypes.oneOf(['large', 'small']),
};

export default StyledInput;
