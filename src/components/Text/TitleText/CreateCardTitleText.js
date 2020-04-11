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
  color: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '#2a685b' : '#36405C'};
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: ${props => (props.appView === 'MOBILE_VIEW_MOBILE' ? 900 : 600)};
  font-size: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '45px' : '47px'};
  line-height: 24px;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 30px;
`;

CreateCardTitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
