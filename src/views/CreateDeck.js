import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../components/TitleText/TitleText.js';

/**
 * Create Deck View
 * @category Views
 * @component
 * @example return (<CreateDeck />);
 */
export const CreateDeck = props => {
  return ( <StyledCreateDeck>
    <TitleText text={ 'Create Deck' }/>
  </StyledCreateDeck> );
};

CreateDeck.propTypes = {};

const StyledCreateDeck = styled.div`
  width: 100%;
`;

