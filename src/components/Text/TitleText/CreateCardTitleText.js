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
  color: #888888;
  font-weight: bold;
  font-size: 45px;
  text-align: left;
  padding: 0 5px;
  margin-bottom: 18px;
  margin-top: 10px;
`;

CreateCardTitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
