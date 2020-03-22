import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

/**
 * Title Text
 *
 * @component
 * @example
 *  <TitleText text={"Create Deck"} />
 *
 * @param text
 * @param color
 * @return {*}
 */
export const TitleText = ( { text, color = '#2A685B' } ) => {
  return (
    <StyledTitleContainer>
      <StyledTitle color={ color }>{ text }</StyledTitle>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
width: 100%;
`;

const StyledTitle = styled.div`
  font-family: Source Sans Pro;
  color: ${ props => props.color };
  font-weight: 900;
  font-size: 45px;
  margin-left: 10%;
  margin-top: 24px;
  text-align: left;
  margin-bottom: 36px;
`;

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

/**
 *
 * @type {Keyframes}
 */
const animation = keyframes`
  0% {
  opacity: 0;
  }
100%{
  opacity: 1;
}
`;