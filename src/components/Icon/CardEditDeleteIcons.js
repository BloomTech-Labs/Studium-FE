import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import styled from 'styled-components';

export const CardEditDeleteIcons = props => {
  return (
    <StyledIonContainer>
      <Icon type="edit" />
      <Icon type="delete" />
    </StyledIonContainer>
  );
};

CardEditDeleteIcons.propTypes = {};

const StyledIonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55px;
`;
