import React from 'react';
import styled from 'styled-components';
import {Uploader} from '../Uploader/Uploader.js';
import TextArea from '../FormItems/Input/TextArea.js';
import CreateCardText from '../Text/CreateCardText.js';
import {CardEditDeleteIcons} from '../Icon/CardEditDeleteIcons.js';
import propTypes from 'prop-types';
import {APP_VIEW_MOBILE, APP_VIEW_DESKTOP} from '../../utilities/constants.js';

export const CreateCard = ({
  newDeck,
  setNewDeck,
  newCard,
  setNewCard,
  name,
  changeHandler,
  value,
  highlighted,
  visible,
  text,
  drillName,
  clickHandler,
  appView,
  ...props
}) => {
  return (
    <StyledCreateCardContainer appView={appView} visible={visible}>
      <StyledCreateCardHeaderContainer>
        <CreateCardText
          appView={appView}
          highlighted={highlighted}
          text={text}
        />
        {props.appView === APP_VIEW_MOBILE && (
          <CardEditDeleteIcons
            type={'clear'}
            name={name}
            newCard={newCard}
            setNewCard={setNewCard}
          />
        )}
      </StyledCreateCardHeaderContainer>
      <StyledCreateCard appView={appView} highlighted={highlighted}>
        <TextArea
          height={`40%`}
          appView={appView}
          value={value}
          clickHandler={clickHandler}
          drillName={drillName}
          onChange={changeHandler}
          placeholder={
            appView === APP_VIEW_MOBILE ? 'Start typing...' : 'Add Text'
          }
        />
        <UploaderContainer>
          <Uploader id={drillName} />
        </UploaderContainer>
      </StyledCreateCard>
    </StyledCreateCardContainer>
  );
};

CreateCard.propTypes = {
  frontCardText: propTypes.string,
  backCardText: propTypes.string,
};

const StyledCreateCard = styled.div`
  width: ${props => (props.appView === APP_VIEW_MOBILE ? '314px' : '100%')};
  height: ${props => (props.appView === APP_VIEW_MOBILE ? '149px' : '90%')};
  border: ${props =>
    props.highlighted ? '2px solid #4CB69F' : '2px solid #908a7d'};
  ${props =>
    props.appView === APP_VIEW_DESKTOP ? 'border: 1px solid #36405C;' : ''}
  border-radius: ${props =>
    props.appView === APP_VIEW_MOBILE ? '4px' : '10px'};
  display: flex;
  ${props =>
    props.appView === APP_VIEW_DESKTOP ? 'flex-direction: column;' : ''}
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  ${props =>
    props.appView === APP_VIEW_DESKTOP ? 'background-color: #eeece8;' : ''};
`;

const StyledCreateCardContainer = styled.div`
  width: ${props => (props.appView === APP_VIEW_MOBILE ? '314px' : '47%')};
  height: ${props => (props.appView === APP_VIEW_MOBILE ? '180px' : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${props => (props.appView === APP_VIEW_MOBILE ? '30px' : '')};
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const StyledCreateCardHeaderContainer = styled.div`
  width: 100%;
  height: ${props => (props.appView === APP_VIEW_MOBILE ? '31px' : '10%;')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploaderContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;
