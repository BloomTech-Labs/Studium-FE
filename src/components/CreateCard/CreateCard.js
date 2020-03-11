import React from 'react';
import styled from 'styled-components';
import {Uploader} from '../Uploader/Uploader.js';
import TextArea from '../FormItems/Input/TextArea.js';
import CreateCardText from '../Text/CreateCardText.js';
import {CardEditDeleteIcons} from '../Icon/CardEditDeleteIcons.js';
import propTypes from 'prop-types';

export const CreateCard = ({
  visible,
  frontCardText,
  backCardText,
  ...props
}) => {
  return (
    <StyledCreateCardContainer visible={visible}>
      <StyledCreateCardHeaderContainer>
        <CreateCardText text={frontCardText ? frontCardText : backCardText} />
        <CardEditDeleteIcons />
      </StyledCreateCardHeaderContainer>
      <StyledCreateCard>
        <TextArea
          onChange={props.onChange}
          value={props.value || ''}
          placeholder={'Start typing...'}
        />
        <Uploader />
      </StyledCreateCard>
    </StyledCreateCardContainer>
  );
};

CreateCard.propTypes = {
  frontCardText: propTypes.string,
  backCardText: propTypes.string,
};

const StyledCreateCard = styled.div`
  width: 314px;
  height: 149px;
  border: 2px solid #908a7d;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  textarea {
    align-self: flex-start;
  }
`;

const StyledCreateCardContainer = styled.div`
  width: 314px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const StyledCreateCardHeaderContainer = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
