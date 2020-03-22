import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import styled from 'styled-components';

export const CardEditDeleteIcons = props => {
  const editClickHandler = e => {
    console.log('edit button was clicked');
  };
  const clearClickHandler = e => {
    console.log('clear button was clicked');
  };

  return (
    <StyledIonContainer>
      <Icon onClick={editClickHandler} type="edit" />
      <Icon onClick={clearClickHandler} type="delete" />
    </StyledIonContainer>
  );
};

CardEditDeleteIcons.propTypes = {};

const StyledIonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55px;
`;
