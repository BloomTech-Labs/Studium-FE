import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {FormInput} from '../FormItems/Input/FormInput.js';
import styled from 'styled-components';
import {CardEditDeleteIcons} from '../Icon/CardEditDeleteIcons.js';
import {APP_VIEW_MOBILE, APP_VIEW_DESKTOP} from '../../utilities/constants.js';

export const DeckName = ({
  value,
  name,
  setNewDeck,
  newDeck,
  setDisableInput,
  disableInput,
  highlighted,
  setHighlighted,
  clickHandler,
  changeHandler,
  appView,
  ...props
}) => {
  return (
    <DeckNameContainer appView={appView}>
      <DeckNameIconContainer>
        <DeckTitlePrompt highlighted={highlighted}>
          {props.appView === APP_VIEW_MOBILE ? 'Title of Deck' : 'Name of Deck'}
        </DeckTitlePrompt>
        {props.appView === APP_VIEW_MOBILE && (
          <CardEditDeleteIcons
            setNewDeck={setNewDeck}
            newDeck={newDeck}
            type={'clear'}
            name={name}
            setDisableInput={setDisableInput}
          />
        )}
      </DeckNameIconContainer>

      <FormInput
        placeholder={props.appView === APP_VIEW_MOBILE ? '' : 'Name of Deck'}
        appView={appView}
        className="formClassSynaps"
        onChange={changeHandler}
        name="title"
        onClick={clickHandler}
        borderStyle={highlighted ? '2px solid #4CB69F' : '2px solid #908A7D'}
        width={appView === APP_VIEW_MOBILE ? '100%' : '35%'}
        bordered={true}
        value={value}
      />
    </DeckNameContainer>
  );
};

DeckName.propTypes = {};

const DeckNameContainer = styled.div`
  width: 100%;
  ${props => (props.appView === APP_VIEW_DESKTOP ? 'height: 50%;' : '')}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DeckTitlePrompt = styled.h1`
  color: ${props =>
    props.appView === APP_VIEW_DESKTOP ? '#36405C' : '#888888'};
  color: ${props =>
    props.highlighted && props.appView === APP_VIEW_MOBILE
      ? '#4CB69F'
      : '#888888'};
  font-style: normal;
  font-weight: ${props =>
    props.appView === APP_VIEW_MOBILE ? 'bold' : 'normal'};
  font-size: ${props => (props.appView === APP_VIEW_MOBILE ? '26px' : '24px')};
  text-align: left;
  line-height: 33px;
  margin-bottom: 12px;
`;

const DeckNameIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
