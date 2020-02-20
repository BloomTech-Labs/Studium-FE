import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Icon} from 'antd';


const StyledCard = ({
  text = 'text',
  type ,
  size ,
  icon ,
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
      loading={loading}
      block={block}
      {...props}
    >
    {icon && <Icon type={icon} />}
    {text}
    </StyledAntdCard>
  );
};

StyledCard.propTypes = {
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
    width: 400px;
    height: 240px;
    left:  450px;
    top: 90px;
    padding: '0 auto';
    border-radius: 45px;
    background-color: ${props => {
      if (props.type === 'primary') {
        return props.theme.mainColor
      } else {
          return props.theme.white
      }
    }};
`

export default StyledCard;
