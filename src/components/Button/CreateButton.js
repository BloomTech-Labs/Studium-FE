import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export const CreateButton = ({
    text, type = 'primary', size = 'default', icon, shape, loading, block, color, ...props
}) => {
    return (
        <Styled />
    )
}

const Styled = styled(Button)`
&&{
    background: #4CB69F;
}`;