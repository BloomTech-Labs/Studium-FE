import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 *   NewSvgContainer
 *
 *  @component
 *  @param
 *
 */
const NewSvgContainer = ( { svg, ...props } ) => {
  const Svg = withStyledSvg( svg );
  return (
    <Container>
      <Svg { ...props }/>
    </Container>
  );
};

const withStyledSvg = ( svg ) => styled( svg )`
position: absolute;
top: ${ props => props.top }
left: ${ props => props.left }
overflow: visible;


> svg:not(:root) {
    overflow: visible;
    color: purple;
}

> path {
  fill: purple;
}

& {
  border: 1px solid red;
    path[Attributes Style] {
      fill: purple;
    }
  }
  }

`;

const Container = styled.div`
display: flex;
position: relative;
justify-content; center;
width: 100vw;
height: 100vh;

`;
NewSvgContainer.propTypes = {
  svg: PropTypes.object,
}
;

export default NewSvgContainer;