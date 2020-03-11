import React from 'react';
import PropTypes from 'prop-types';
import {FormInput} from '../FormItems/Input/FormInput.js';
import styled from 'styled-components';
import {CardEditDeleteIcons} from '../Icon/CardEditDeleteIcons.js';

export const DeckName = props => {
  return (
    <DeckNameContainer>
      <DeckNameIconContainer>
        <DeckTitlePrompt>Title of Deck</DeckTitlePrompt>
        <CardEditDeleteIcons />
      </DeckNameIconContainer>
      <FormInput inputWidth={'100%'} />
    </DeckNameContainer>
  );
};

DeckName.propTypes = {};

const DeckNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DeckTitlePrompt = styled.h1`
  color: #888888;
  font-weight: bold;
  font-size: 26px;
  text-align: left;
`;

const DeckNameIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
