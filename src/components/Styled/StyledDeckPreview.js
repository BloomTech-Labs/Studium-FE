import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Card} from 'antd';

const StyledDeckPreview = ({
    text,
    type = 'inner',
    size = 'default',
    icon,
    loading,
    block,
    hoverable,
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
        {text}
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
}

const StyledAntdCard = styled(Card)`
 && {
    position: absolute;
    width: 97px;
    height: 153px;
    left: 22px;
    top: 194px;
    border-radius: 13px;
    border: 3px solid rgba(136, 136, 136, 0.75);
    box-sizing: border-box;
 }
`
export default StyledDeckPreview;