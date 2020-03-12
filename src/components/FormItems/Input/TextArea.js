import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Input} from 'antd';
const {TextArea} = Input;

const StyledTextArea = ({
  value,
  autoSize,
  clickHandler,
  drillName,
  ...props
}) => {
  return <STextArea name={drillName} onClick={clickHandler} {...props} />;
};

StyledTextArea.propTypes = {
  autoSize: PropTypes.bool,
  value: PropTypes.string,
};

export default StyledTextArea;

const STextArea = styled(TextArea)`
  width: 175px;
  height: 23px;
  border-top-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
  .no-outline:focus {
    outline: none;
  }
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
  :focus {
    box-shadow: none;
  }
`;
