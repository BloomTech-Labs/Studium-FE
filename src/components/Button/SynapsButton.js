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
  appView,
  allFieldsValidated,
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
      allFieldsValidated={allFieldsValidated}
      appView={appView}
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
    'defaultCreateCard',
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
  background: PropTypes.string,
};

const StyledAntdButton = styled(Button)`
  && {
    border: ${props => {
      if (
        props.type === 'defaultCreateCard' &&
        props.appView === 'APP_VIEW_MOBILE'
      ) {
        return '3px solid #4CB69F';
      } else if (
        props.type === 'defaultCreateCard' &&
        props.appView === 'APP_VIEW_DESKTOP'
      ) {
        return '1px solid #343D58';
      }
    }};

    height: ${props => (props.height ? props.height : '100%')};
    width: ${props => (props.width ? props.width : '100%')};

    color: ${props => {
      if (props.appView === 'APP_VIEW_MOBILE') {
        if (props.type === 'secondary') {
          return 'white';
        } else if (props.type === 'defaultCreateCard') {
          return '#4CB69F';
        } else if (props.type === 'primaryCreateCard') {
          return '#fff';
        } else {
          return 'black';
        }
      } else {
        if (props.type === 'defaultCreateCard') {
          return '#343D58';
        } else if (props.type === 'primaryCreateCard') {
          return '#fff';
        }
      }
    }};

    background-color: ${props => {
      if (props.type === 'secondary') {
        return props.theme.themeState.secondary4CB69F;
      } else if (props.type === 'primaryCreateCard') {
        if (!props.allFieldsValidated && props.appView === 'APP_VIEW_DESKTOP') {
          return 'rgba(161, 213, 201, 0.25)';
        } else {
          return '#4CB69F';
        }
      } else if (props.type === 'darkgray') {
        return props.theme.darkGray;
      } else {
        return props.theme.lightGray;
      }
    }};

    :active {
      background-color: ${props => {
        if (props.type === 'primaryCreateCard' && props.allFieldsValidated) {
          return '#235449';
        } else if (props.type === 'defaultCreateCard') {
          return '#6FEDB7';
        }
      }};
      border: ${props => {
        if (props.appView === 'APP_VIEW_MOBILE' && props.allFieldsValidated) {
          if (props.type === 'primaryCreateCard') {
            return '3px solid #235449';
          } else if (props.type === 'defaultCreateCard') {
            return '3px solid #6FEDB7';
          } else {
            return 0;
          }
        }
      }};
    }
    ${props => {
      if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_MOBILE') {
          return 'width: 136px; height: 42px; border-radius: 11px;';
        } else {
          return 'width: 264px; height: 54px; border-radius: 33px;';
        }
      }
    }}
    ${props => {
      if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_DESKTOP') {
          return 'font-size: 21px;';
        }
      }
    }}
  }
`;
