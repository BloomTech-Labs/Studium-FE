import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SynapsButton} from '../components';
import {Button, Modal} from 'antd';


export const SynapsModal = ({
    centered,
    onOk,
    onCancel,
    zIndex,
    mask,
    ...props
}) => {
    return (
        <StyledAntdModal
        centered={centered}
        onOk={onOk}
        onCancel={onCancel}
        zIndex={zIndex}
        mask={mask}
        >

        </StyledAntdModal>
    )
}

SynapsModal.propTypes = {
    centered: PropTypes.bool,
    
}

const StyledAntdModal = styled(Modal)`

`