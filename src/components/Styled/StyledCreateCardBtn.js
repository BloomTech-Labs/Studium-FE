import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';

const StyledCreateCardBtn = ({
  text,
  type = 'primary',
  size = 'default',
  icon,
  shape,
  loading,
  block,
  visable,
  ...props
}) => {
  if (visable) {
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
            style={{
              fontSize: '59px',
              color: 'black',
              lineHeight: '10px',
              fontWeight: 900,
            }}
          />
        }
        {text}
      </StyledAntdButton>
    );
  } else {
    return <></>;
  }
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
  left: PropTypes.string,
  bottom: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const StyledAntdButton = styled(Button)`
  && {
    position: absolute;
    left: ${props => props.left || '50%'};
    bottom: ${props => props.bottom || '25px'};
    width: 99px;
    height: 99px;
    padding: ${props => props.padding || '0'};
    background: ${props => props.backgroundColor || props.theme.lightGray};
    border: ${props => props.border || '10px solid white'};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transform: translate(-50%);
  }
`;
export default StyledCreateCardBtn;
