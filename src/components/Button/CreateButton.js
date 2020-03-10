import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {ReactComponent as Svg } from '../../images/Union.svg';

export const CreateButton = ({
     height = "69px",width = "69px",onClick,...props
}) => {
    return (
        <Styled width = {width} height = {height} onClick = {onClick} {...props}> 
            <Svg /> 
        </Styled>
    )
}

const Styled = styled(Button)`
&&{
    display: flex;
    box-sizing: border-box;
    position: relative;
    background: #4CB69F;
    border-radius: 100%;
    height: ${props => props.height};
    width: ${props => props.width};
    border: 7px solid white;
    justify-content: center;
    align-items: center;
    > Svg {
        height:33px;
        width: 33px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        position: absolute;
    }
}`;
