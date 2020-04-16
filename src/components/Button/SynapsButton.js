import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'antd';

/**
 * Button Component
 *
 * @component
 *
 * @example
 * return (
 *    <SynapsButton  />
 *    )
 */
export const SynapsButton = ({
  text,
  height,
  width,
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
      icon={icon}
      shape={shape}
      loading={loading && 'loading'}
      block={block && 'block'}
      height={height}
      width={width}
      {...props}
    >
      {text}
    </StyledAntdButton>
  );
};

SynapsButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'primaryCreateCard',
    'default',
    'dashed',
    'danger',
    'link',
    'darkgray',
  ]),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  icon: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'round']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
  
};

const StyledAntdButton = styled(Button)`
  && {
  
   height: ${props => props.height ? props.height : '100%'};
   width: ${props => props.width ? props.width : '100%'};

    color: ${props => {
  if(props.type === 'secondary'){
    return 'white';
  }else if(props.type === 'defaultCreateCard'){
    return '#4CB69F';
  }else if(props.type === 'primaryCreateCard'){
    return '#fff';
  }else{
    return 'black';
  }
}};

    background-color: ${props => {
  if(props.type === 'secondary'){
    return props.theme.themeState.secondary4CB69F;
  }else if(props.type === 'primaryCreateCard'){
    return '#4CB69F';
  }else if(props.type === 'darkgray'){
    return props.theme.darkGray;
  }else{
    return props.theme.lightGray;
  }
}};

    ${props => {
  if(
    props.type === 'primaryCreateCard' ||
    props.type === 'defaultCreateCard'
  ){
    return 'width: 136px; height: 42px; border-radius: 11px;';
  }
}}
  }
`;
