import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import styled from 'styled-components';

export const CardEditDeleteIcons = ({
  type,
  name,
  setDisableInput,
  newCard,
  setNewCard,
}) => {
  console.log('name from icons.js|||', name);

  const editClickHandler = e => {
    console.log('edit button was clicked');
    if (name === 'newDeck' && setDisableInput) {
      setDisableInput(false);
    }
  };
  const clearClickHandler = e => {
    let clickName = e.target.name;
    console.log('name from clear|||', clickName);
    console.log('clear button was clicked');
    if (name === 'newCardQuestion') {
      setNewCard({...newCard, question: ''});
    }
    if (name === 'newCardAnswer') {
      setNewCard({...newCard, answer: ''});
    }
  };

  if (type === 'edit') {
    return (
      <StyledIonContainer>
        <Icon name={name} onClick={editClickHandler} type="edit" />
      </StyledIonContainer>
    );
  } else if (type === 'clear') {
    return (
      <StyledIonContainer>
        <Icon name={name} onClick={clearClickHandler} type="delete" />
      </StyledIonContainer>
    );
  } else {
    return (
      <StyledIonContainer>
        <Icon name={name} onClick={editClickHandler} type="edit" />
        <Icon name={name} onClick={clearClickHandler} type="delete" />
      </StyledIonContainer>
    );
  }
};

CardEditDeleteIcons.propTypes = {
  type: PropTypes.oneOf(['edit', 'clear', 'both']),
};

const StyledIonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55px;
`;
