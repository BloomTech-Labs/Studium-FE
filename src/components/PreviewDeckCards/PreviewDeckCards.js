import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import { CreateButton } from '../Button/CreateButton.js';

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
  text, icon, loading, block, hoverEffect, selected = 'none', card, type = 'inner', size = 'default', ...props
} ) => (
  <StyledAntdCard
    type={ type }
    size={ size }
    icon={ icon }
    loading={ loading && 'loading' }
    block={ block && 'block' }
    { ...props }
  >
    { !card &&
    <p className={ 'deck-text' } style={ { marginBottom: '1.5rem' } }>Add
      Cards</p> }
    { !card && <CreateButton width={ '49px' } height={ '49px' }/> }
    { card && <p className={ 'deck-text' }>{ card.question }</p> }
    <Icon type={ 'check-circle' }
          style={ {
            display: selected,
            position: 'absolute', bottom: '5px', right: '5px',
          } }
    />
  </StyledAntdCard>

);

const StyledAntdCard = styled( Card )`
  && {
    position: relative;
    width: 108px;
    height: 153px;
    margin-top: 20px;
    border-radius: 13px;
    border: 3px solid #D7EEE7;
    background: #EEECE8;
    box-sizing: border-box;
    font-size: 13px;
    margin-left: 9;
    margin-right: 9px;
    
    > .ant-card-body{
      padding: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    
    > p.deck-text {
      text-overflow: hidden;
      overflow-x: hidden;
      font-weight: bold;
      color: #5C6078;
      line-height: 15px;
    }
    
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