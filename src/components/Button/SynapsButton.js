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
    border: ${props => {
      if (props.type === 'defaultCreateCard') {
        return '3px solid #4CB69F';
      } else {
        return 0;
      }
    }};

    color: ${props => {
      if (props.type === 'darkgray') {
        return 'white';
      } else if (props.type === 'defaultCreateCard') {
        return '#4CB69F';
      } else if (props.type === 'primaryCreateCard') {
        return '#fff';
      } else {
        return 'black';
      }
    }};

    background-color: ${props => {
      if (props.type === 'primary') {
        return props.theme.primary;
      } else if (props.type === 'primaryCreateCard') {
        return '#4CB69F';
      } else if (props.type === 'darkgray') {
        return props.theme.darkGray;
      } else {
        return props.theme.lightGray;
      }
    }};

    :active {
      background-color: ${props => {
        if (props.type === 'primaryCreateCard') {
          return '#235449';
        } else if (props.type === 'defaultCreateCard') {
          return '#6FEDB7';
        }
      }};
      border: ${props => {
        if (props.type === 'primaryCreateCard') {
          return '3px solid #235449';
        } else if (props.type === 'defaultCreateCard') {
          return '3px solid #6FEDB7';
        }
      }};
    }

    ${props => {
      if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        return 'width: 136px; height: 42px; border-radius: 11px;';
      }
    }}
  }
`;
