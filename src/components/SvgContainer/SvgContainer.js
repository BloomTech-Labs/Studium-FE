import React from 'react';
import styled from 'styled-components';
import {useTheme, ThemeContext} from 'styled-components';
import PropTypes from 'prop-types';
import { useAppHooks } from '../../customHooks/useAppHooks.js';

/**
 *  Svg Container Component
 *
 * @description Just pass in a svg and the pass in the params to style.
 *
 * @component
 * @example
 * import {ReactComponent as svg} from '../../images/brainpic.svg';
 * return (
 *  <SvgContainer
 *    svg={svg}
 *    zIndex={ 1 }
 *    position={ 'absolute' }
 *    backgroundColor={ theme.primaryColor }
 *    color={ '#164172' }
 *    opacity={ 1 }
 *    strokeColor={ theme.primaryColor }
 *    viewBox={ '225 25 400 400' }
 *  />
 *  )
 */
export const SvgContainer = ({
  svg: Svg, // I want to wrap this component in the styled tag below.
  position,
  opacity,
  left,
  backgroundColor,
  strokeColor,
  strokeWidth,
  zIndex,
  color,
  top,
  viewBox,
  width,
  height,
  testId = 'synaps-brain',
  ...props
} ) => {
  
  const { theme } = useAppHooks();
  const StyledSvg = withStyles( Svg );
  
  return (
    <StyledContainer
      height={height}
      width={width}
      position={position}
      left={left}
      top={top}
      data-testId={'positional-container'}
    >
      <StyledDiv
        height={height}
        width={width}
        data-testId={'relative-container'}
      >
        <StyledSvg
          data-testid={testId}
          backgroundColor={backgroundColor}
          color={color}
          theme={theme}
          viewBox={viewBox}
          zIndex={zIndex}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </StyledDiv>
    </StyledContainer>
  );
};

const withStyles = Component => styled(Component)`
  z-index: ${props => props.zIndex || 5};
  background: ${({backgroundColor, theme}) => backgroundColor || theme.white};

  > *::before,
  *::after,
  * {
    z-index: ${props => props.zIndex || 5};
    opacity: ${props => props.opacity || 1};
    fill: ${props => props.color || props.theme.primaryColor};
  }
  > g {
    z-index: ${props => props.zIndex || 5};
    stroke: ${props => props.strokeColor || props.theme.white};
    stroke-width: ${props => props.strokeWidth || ' 1px'};
  }
`;

const StyledContainer = styled.div`
  position: ${props => props.position || 'block'};
  left: ${props => props.left || 0};
  top: ${props => props.top || 0};
  width: ${props => props.width || 'min-content'};
  height: ${props => props.height || 'min-content'};
`;

const StyledDiv = styled.div`
  position: relative;
  width: ${props => props.width || 'min-content'};
  height: ${props => props.height || 'min-content'};
`;

SvgContainer.propTypes = {
  svg: PropTypes.any.isRequired,
  position: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  strokeColor: PropTypes.string,
  stokeWidth: PropTypes.string,
  viewBox: PropTypes.string,
  zIndex: PropTypes.number,
  testId: PropTypes.string,
};

/**
 * @typedef {object} SvgProps
 * @param {string} position Default is block
 * @param {number} opacity Number between 1 and 0
 * @param {string | number} left How far from left if absolute positioning
 * @param {string } backgroundColor Background color of the SVG.
 * @param {string} strokeColor Stroke color for the SVG.
 * @param {string} strokeWidth Size of svg strokes
 * @param {number} zIndex Z-index of the svg.
 * @param {string} color Fill color of the SVG.
 * @param {string | number} top How far from the top do you want the container.
 * @param {string} viewBox Example 0 0 100 100, x,y,size,size
 * @param {string} testId For testing purposes. Default is 'synaps-brain'
 */
