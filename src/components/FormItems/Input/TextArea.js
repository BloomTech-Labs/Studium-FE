import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Input} from 'antd';
const {TextArea} = Input;

const StyledTextArea = ({
  onChange,
  height = '23px',
  value,
  autoSize,
  clickHandler,
  drillName = 'defaultName',
  ...props
}) => {
  return (
    <STextArea
      onChange={onChange}
      style={{height: `100%`}}
      name={drillName}
      height={height}
      onClick={clickHandler}
      value={value}
      {...props}
    />
  );
};

StyledTextArea.propTypes = {
  autoSize: PropTypes.bool,
  value: PropTypes.string,
};

export default StyledTextArea;

const STextArea = styled(TextArea)`
  border-top-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
  background-color: transparent;
  .no-outline:focus {
    outline: none;
  }
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  :focus {
    box-shadow: none;
  }
`;
