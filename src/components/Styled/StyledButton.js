import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const StyledButton = ({
  text,
  type = 'primary',
  size = 'default',
  icon,
  shape,
  loading,
  block,
  color, 
  position = "none",
  top,
  left,
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
      
      {...props}
      position={position}
      top = {top}
      left={left}
    >
      {text}
    </StyledAntdButton>
  );
};

StyledButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'dashed', 'danger', 'link', 'darkgray']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  icon: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'round']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
};

const StyledAntdButton = styled(Button)`
  && {
    border: 0;
    border-radius:15px;
    color: ${props => {
      if(props.type === 'darkgray') {
        return 'white'
      } else {
        return 'black'
      }
    }};
    
    background-color: ${props =>{
     if( props.type === 'primary'){
       return props.theme.mainColor
     } else if (props.type === 'darkgray') {
      return props.theme.darkGray
     } else { 
       return props.theme.mainColor
     }
  }};
  position: ${props => {
    if(props.position !== "none"){
      return props.position
    }
    return ""
  }};
  top: ${props => {
    if(props.position !== "none"){
      return props.top
    }
    return ""

    }};
    left: ${props => {
      if(props.position !== "none"){
        return props.left
    }
    return ""
    }};

    width: ${props => {
      if(props.size === "large"){
        return "204px"
    }
    return ""
    }};

    height: ${props => {
      if(props.size === "large"){
        return "62px"
    }
    return ""
    }};
}
`

export default StyledButton;
