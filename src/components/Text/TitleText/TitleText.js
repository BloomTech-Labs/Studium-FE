import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
export const TitleText = ({text, color = '#2A685B'}) => {
  return (
    <StyledTitleContainer>
      <StyledTitle color={color}>{text}</StyledTitle>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
width: 100%;
`;

const StyledTitle = styled.div`
  color: ${props => props.color};
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
