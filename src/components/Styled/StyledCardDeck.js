import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const StyledCardDeck = ({
  text,
  type = 'inner',
  size = 'default',
  icon,
  loading,
  block,
  hoverable,
  ...props
}) => {
  return (
    <StyledAntdCard
      type={type}
      size={size}
      icon={icon}
      loading={loading && 'loading'}
      block={block && 'block'}
      {...props}
    >
      {text}
    </StyledAntdCard>
  );
};

StyledCardDeck.propTypes = {
  text: PropTypes.string,  
  type: PropTypes.oneOf(['inner']),
  size: PropTypes.oneOf(['default', 'small']),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  hoverable: PropTypes.bool,
};

const StyledAntdCard = styled(Card)`
  && {
    width: 94px;
    height: 94px;
    left: 24px;
    top: '240px';
    padding: '0 auto';
    border-radius: 17px;
    background-color: ${props => {
      if (props.type === 'primary') {
        return props.theme.mainColor
      } else {
          return props.theme.white
      }
    }};

    &&{
        border: ${props => {
            if(props.border === 'dashed'){
                return '3px dashed rgba(136, 136, 136, 0.75)'
            } else if (props.border === 'solid' ){
                return '3px solid #c4c4c4'
            }
        }}
    }
  }
  `;

export default StyledCardDeck;
