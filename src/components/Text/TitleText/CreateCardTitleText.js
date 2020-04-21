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

const StyledTitle = styled.h1`
  color: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '#2a685b' : '#36405C'};
  font-style: normal;
  font-weight: ${props => (props.appView === 'MOBILE_VIEW_MOBILE' ? 900 : 600)};
  font-size: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '45px' : '47px'};
  line-height: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '24px' : '30px'};
  text-align: left;
  margin-bottom: ${props =>
    props.appView === 'MOBILE_VIEW_MOBILE' ? '30px' : '75px'};
  margin-top: 30px;
`;

CreateCardTitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
