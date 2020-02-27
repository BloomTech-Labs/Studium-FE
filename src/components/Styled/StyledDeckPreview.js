import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const StyledDeckPreview = ({
/*eslint no-unused-vars:0*/
  text,
/*eslint react/prop-types:0*/
  type = 'inner',
  size = 'default',
  icon,
  loading,
  block,
/*eslint no-unused-vars:0*/
  hoverable,
/*eslint react/prop-types:0*/
  deck,
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
/*eslint react/prop-types:0*/
      {deck && <p className={'deck-text'}>{deck.card_name}</p>}
    </StyledAntdCard>
  );
};

StyledDeckPreview.propTypes = {
  text: PropTypes.string,
  types: PropTypes.oneOf(['inner']),
  size: PropTypes.oneOf(['default']),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  hoverable: PropTypes.bool,
};

const StyledAntdCard = styled(Card)`
  && {
    width: 97px;
    height: 153px;
    margin-top: 20px;
    border-radius: 13px;
    border: 3px solid rgba(136, 136, 136, 0.75);
    box-sizing: border-box;

    > .deck-text {
    }
  }
`;
export default StyledDeckPreview;
