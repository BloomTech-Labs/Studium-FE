import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, 
Icon } from 'antd';
const StyledCreateCardBtn = ({
  text,
  type = 'primary',
  size = 'default',
  icon,
  shape,
  loading,
  block,
  color,
  ...props
}) => {
  return (
    <StyledAntdButton
      type={type}
      size={size}
      shape={shape}
      loading={loading && 'loading'}
      block={block && 'block'}
      {...props}
    >
      {
        <Icon
         type={icon}
          style={{ fontSize: '70px', color: 'black', lineHeight: '10px' }}
        />
      }
      {text}
    </StyledAntdButton>
  );
};

StyledCreateCardBtn.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  icon: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'round']),
  spin: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
};

const StyledAntdButton = styled(Button)`
  && {
    position: absolute;
    width: 99px;
    height: 99px;
    left: 139px;
    top: 688px;
    padding: 10px;    
    background: #d7d7d7;
    border-style: none;
    box-sizing: border-box;
  }
`;
export default StyledCreateCardBtn;
