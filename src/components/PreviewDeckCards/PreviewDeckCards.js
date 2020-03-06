import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';

/**
 * Styled Deck Preview
 *
 * Preview card of the deck name with styles and select effects.
 * @function
 * @name PreviewDeckCards
 * @returns React.Component
 */
export const PreviewDeckCards = ( {
  text, type = 'inner', size = 'default', icon, loading, block, hoverable, deck, ...props
} ) => {
  return (
    
    <StyledAntdCard
      type={ type }
      size={ size }
      icon={ icon }
      loading={ loading && 'loading' }
      block={ block && 'block' }
      { ...props }
    >
      
      { deck && <p className={ 'deck-text' }>{ deck.card_name }</p> }
      <Icon type={ 'check-circle' }
            style={ {
              position: 'absolute', bottom: '5px', right: '5px',
            } }
      />
    </StyledAntdCard>
  
  );
};

PreviewDeckCards.propTypes = {
  text: PropTypes.string,
  types: PropTypes.oneOf( [ 'inner' ] ),
  size: PropTypes.oneOf( [ 'default' ] ),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  hoverable: PropTypes.bool,
};

const StyledAntdCard = styled( Card )`
  && {
    position: relative;
    width: 97px;
    height: 153px;
    margin-top: 20px;
    border-radius: 13px;
    border: 3px solid rgba(136, 136, 136, 0.75);
    box-sizing: border-box;
    > .deck-text {
    }
  }
`;
