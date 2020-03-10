import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';


/**
 * Small Flash Card
 *
 * @component
 * @example
 * return (
 *  <SmallFlashCard />
 *  )
 */
export const SmallFlashCard = ( {
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
      
      { icon &&
      ( <Icon type={ icon } style={ { fontSize: '32px', color: 'black' } }/> ) }
      
      { deck && <p className={ 'card-text' }>{ deck.deck_name }</p> }
    </StyledAntdCard>
  
  );
};

SmallFlashCard.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf( [ 'inner' ] ),
  size: PropTypes.oneOf( [ 'default', 'small' ] ),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  hoverable: PropTypes.bool,
};

const StyledAntdCard = styled( Card )`
  && {
    margin: 8px;
    font-weight: bold;
    width: 94px;
    height: 94px;
    border-radius: 17px;
    background-color: ${ props => {
  if( props.type === 'primary' ){
    return props.theme.mainColor;
  }else{
    return props.theme.white;
  }
} };

    border: ${ props => {
  if( props.border === 'dashed' ){
    return '3px dashed rgba(136, 136, 136, 0.75)';
  }else if( props.border === 'solid' ){
    return '3px solid #c4c4c4';
  }
} };

    > .ant-card-body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 5px;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;

      > .card-text {
      }
    }
  }
`;

