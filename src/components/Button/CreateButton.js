import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {ReactComponent as Svg} from '../../images/Union.svg';

export const CreateButton = ({
  height = '69px',
  width = '69px',
  onClick,
  ...props
}) => {
  return (
    <Styled width={width} height={height} onClick={onClick} {...props}>
      <Svg />
    </Styled>
  );
};

const Styled = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* position: relative; */
    background: #4cb69f;
    border-radius: 100%;
    height: ${props => props.height};
    width: ${props => props.width};
    border: 7px solid white;
    > svg {
      height: 55%;
      width: 55%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
  }
`;

CreateButton.propTypes = {
  height: PropTypes.string,
  onClick: PropTypes.any,
  width: PropTypes.string,
};
