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
 */
export const CreateCardTitleText = ({text}) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: #2a685b;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 30px;
`;

CreateCardTitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
