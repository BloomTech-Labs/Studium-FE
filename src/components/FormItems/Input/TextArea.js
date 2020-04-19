import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Input} from 'antd';
import {
  APP_VIEW_MOBILE,
  APP_VIEW_DESKTOP,
} from '../../../utilities/constants.js';
const {TextArea} = Input;

const StyledTextArea = ({
  onChange,
  height = '23px',
  value,
  autoSize,
  clickHandler,
  drillName = 'defaultName',
  placeholder,
  appView,
  ...props
}) => {
  return (
    <STextArea
      appView={appView}
      onChange={onChange}
      name={drillName}
      height={height}
      onClick={clickHandler}
      value={value}
      placeholder={placeholder}
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
  && {
    border-top-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-right-style: none;
    background-color: transparent;
    .no-outline:focus {
      outline: none;
    }
    height: ${props => props.height};
    align-self: ${props =>
      props.appView === APP_VIEW_DESKTOP ? 'center' : 'flex-start'};
    ${props =>
      props.appView === APP_VIEW_DESKTOP
        ? ' ::-webkit-input-placeholder  {line-height: 90px; text-align: center; color: #939598; font-weight: normal; font-size: 24px;}'
        : ''}

    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 24px;
    :focus {
      box-shadow: none;
    }
    overflow: auto;
  }
`;
