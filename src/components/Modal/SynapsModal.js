import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SynapsButton} from '../Button/SynapsButton';
import {Button, Modal} from 'antd';

export const  SynapsModal = ({
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
        <Modal
        centered={centered}
        onOk={onOk}
        onCancel={onCancel}
        zIndex={zIndex}
        mask={mask}
        visible={visible}
        {...props}
        >
        {title}
        </Modal>
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

// const StyledAntdModal = styled(Modal)`

// `
// export default SynapsModal;