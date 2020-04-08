import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import styled from 'styled-components';

export const CardEditDeleteIcons = ({
  type,
  name,
  newDeck,
  setNewDeck,
  newCard,
  setNewCard,
}) => {
  console.log('name from icons.js|||', name);

  const editClickHandler = e => {
    console.log('edit button was clicked');
  };
  const clearClickHandler = e => {
    if (name === 'newCardQuestion') {
      setNewCard({...newCard, question: ''});
    } else if (name === 'newCardAnswer') {
      setNewCard({...newCard, answer: ''});
    } else if (name === 'newDeck') {
      setNewDeck({...newDeck, deck_name: ''});
    }
  };

  if (type === 'edit') {
    return (
      <StyledIonContainer>
        <Icon type="edit" />
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
  justify-content: ${props =>
    props.type === 'both' ? 'space-between' : 'flex-end'};
  align-items: center;
  width: 55px;
`;
