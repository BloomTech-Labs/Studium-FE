import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import plus from '../../images/plus.png';

export const CreateButton = ({
    text, type = 'primary', size = 'default', icon, shape, loading, block, color, ...props
}) => {
    return (
        <Styled > 
            <img src = {plus} />
        </Styled>
    )
}

const Styled = styled(Button)`
&&{
    background-image: url(${plus});
    background: #4CB69F;
    border-radius: 100%;
    width: 20px;
    > img {
        height: "100%";
        width: "100%";
    }
}`;
