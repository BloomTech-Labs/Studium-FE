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
export const TitleText = ({text}) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: #36405c;
  font-weight: bold;
  font-size: 45px;
  margin-left: 10%;
  margin-top: 24px;
  text-align: left;
  margin-botom: 36px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
`;

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
