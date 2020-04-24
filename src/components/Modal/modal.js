import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SynapsButton} from '../components';
import {Button, Modal} from 'antd';

const SynapsModal = ({
    visible,
    title,
    centered,
    onOk,
    onCancel,
    zIndex,
    mask,
    icon,
    ...props
}) => {
    return (
        <StyledAntdModal
        centered={centered}
        onOk={onOk}
        onCancel={onCancel}
        zIndex={zIndex}
        mask={mask}
        visible={visible}
        {...props}
        >
        {title}
        </StyledAntdModal>
    )
}

SynapsModal.propTypes = {
    title: PropTypes.string,
    centered: PropTypes.bool,
    onOk: PropTypes.any,
    onCancel: PropTypes.any,
    centered: PropTypes.bool,
    mask: PropTypes.bool,
    icon: PropTypes.string,    
    visible: PropTypes.bool
}

const StyledAntdModal = styled(Modal)`

`
export default SynapsModal;