import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const StyledCreateCardBtn = ({
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

StyledCreateCardBtn.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'round']),
    loading: PropTypes.bool,
    block: PropTypes.bool

}

const StyledAntdButton = styled(Button)`

`




export default StyledCreateCardBtn;