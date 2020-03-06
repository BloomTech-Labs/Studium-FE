import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Input} from 'antd';
const {TextArea} = Input;

const StyledTextArea = props => {
  return (
    <div>
      <STextArea />
    </div>
  );
};

StyledTextArea.propTypes = {
  autoSize: PropTypes.bool,
  value: PropTypes.string,
};

export default StyledTextArea;

const STextArea = styled(TextArea)`
  width: 175px;
  height: 23px;
  border: 2px solid red;
`;
