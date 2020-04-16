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
export const FlashCard = () => {
  
  return (
    <StyledFlashCard>
    
    </StyledFlashCard>
  );
};

FlashCard.propTypes = {};

const StyledFlashCard = styled.div`
  width: 100%;
`;
