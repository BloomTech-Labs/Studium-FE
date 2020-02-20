import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';

const PreviewDeck = props => {
  return ( <StyledPreviewDeck>
    <StyledTitleText text={ 'Preview' }/>
  </StyledPreviewDeck> );
};

PreviewDeck.propTypes = {};

const StyledPreviewDeck = styled.div`
width: 100%
`;

export default PreviewDeck;