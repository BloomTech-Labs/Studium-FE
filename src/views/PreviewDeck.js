import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledDeckPreview from '../components/Styled/StyledDeckPreview';

const PreviewDeck = props => {
  return ( <StyledPreviewDeck>
    <StyledTitleText text={ 'Preview' }/>
    <StyledDeckPreview text={'hello'} >
      
    </StyledDeckPreview>
  </StyledPreviewDeck> );
};

PreviewDeck.propTypes = {};

const StyledPreviewDeck = styled.div`
width: 100%
`;

export default PreviewDeck;