import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {ReactComponent as Svg } from '../../images/Union.svg';

export const CreateButton = ({
    text, type = 'primary', size = 'default', icon, shape, loading, block, color, ...props
}) => {
    return (
        <Styled > 
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
    height: 69px;
    width: 69px;
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
