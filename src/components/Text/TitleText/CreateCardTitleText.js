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
<<<<<<< HEAD:src/components/TitleText/TitleText.js
export const TitleText = ({text}) => {
=======
export const CreateCardTitleText = ({text}) => {
>>>>>>> SignInDesktopView:src/components/Text/TitleText/CreateCardTitleText.js
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.div`
<<<<<<< HEAD:src/components/TitleText/TitleText.js
  color: #36405c;
  font-weight: bold;
=======
  color: #2a685b;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 900;
>>>>>>> SignInDesktopView:src/components/Text/TitleText/CreateCardTitleText.js
  font-size: 45px;
  line-height: 24px;
  font-weight: bold;
  text-align: left;
<<<<<<< HEAD:src/components/TitleText/TitleText.js
  margin-botom: 36px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
=======
  margin-bottom: 30px;
  margin-top: 30px;
>>>>>>> SignInDesktopView:src/components/Text/TitleText/CreateCardTitleText.js
`;

CreateCardTitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
