import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';

/**
 * Preview Deck Cards
 *
 * @description This component shows the users all the different cards in
 * the deck.
 *
 * @component
 *
 * @example
 * return (
 *  <PreviewDeckCards text={"Card Title"} />
 * )
 */
export const PreviewDeckCards = ( {
  text, icon, loading, block, hoverEffect, card, type = 'inner', size = 'default', ...props
} ) => (
  <StyledAntdCard
    type={ type }
    size={ size }
    icon={ icon }
    loading={ loading && 'loading' }
    block={ block && 'block' }
    { ...props }
  >
    
    { card && <p className={ 'deck-text' }>{ card.question }</p> }
    <Icon type={ 'check-circle' }
          style={ {
            position: 'absolute', bottom: '5px', right: '5px',
          } }
    />
  </StyledAntdCard>

);

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

PreviewDeckCards.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  hoverEffect: PropTypes.bool,
  card: PropTypes.object,
  type: PropTypes.oneOf( [ 'inner' ] ),
  size: PropTypes.oneOf( [ 'default' ] ),
};