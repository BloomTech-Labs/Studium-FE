import React from 'react';
import styled from 'styled-components';
import {TitleText} from '../components';
import {useAppHooks} from '../customHooks/useAppHooks.js';

/**
 * FlashCard
 * @category Views
 * @component
 * @example return (<FlashCard />);
 */
export const FlashCard = props => {
  const {pathPushedState} = useAppHooks("FlashCard");
  // @type {Deck}
  const {deck} = pathPushedState;

  return (
    <StyledFlashCard>
      <TitleText text={deck.deck_name} />
    </StyledFlashCard>
  );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
  width: 100%;
`;
