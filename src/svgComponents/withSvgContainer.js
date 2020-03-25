import React from "react";
import PropTypes from "prop-types";
import {ContainerDiv} from "../components";

/**
 *  With Svg Container
 *
 *  @description Higher order component wrapping the SvgComponent in the
 *  SvgContainer
 *
 *  @name withSvgContainer
 *  @param {SvgComponent} Svg
 *  @returns function(SvgContainerProps) => SvgContainer
 */
const withSvgContainer = (Svg) => {
  
  /**
   * @typedef {object} SvgContainerProps
   * @property {string} margin
   * @property {string} backgroundColor
   * @property {string} height
   * @property {string} width
   * @property {string} zIndex
   * @property {string} svgWidth
   * @property {string} svgHeight
   * @property {string} svgFill
   * @property {string} svgBackground
   * @property {string} svgOpacity
   */
  
  /**
   * @typedef {React.FunctionComponent} SvgContainer
   * @component
   * @param {SvgContainerProps}
   * @returns SvgComponent
   */
  
  debugger;
  const SvgContainer = ({
    margin = "0 auto", backgroundColor = "transparent", containerPosition = "relative",
    height = "100%", width = "100%", zIndex = "1", svgWidth = "100%", top = "0", left = "0",
    maxHeight = "100%", maxWidth = "100%", transform,
    svgHeight = "100%", svgFill, svgBackground, svgOpacity = "1", ...props
  }) => {
    
    return (
      <ContainerDiv position={containerPosition} margin={margin}
                    width={width} top={top} left={left}
                    maxHeight={maxHeight} maxWidth={maxWidth}
                    height={height} backgroundColor={backgroundColor}
                    zIndex={zIndex} id={"svg-container"}
                    overFlowY={"visible"}
                    overFlowX={"visible"}
                    transform={transform}
      >
        <Svg height={svgHeight} width={svgWidth} fill={svgFill}
             background={svgBackground}
             opacity={svgOpacity} {...props}/>
        
        {props.children}
      </ContainerDiv>
    );
  };
  
  SvgContainer.propTypes = {
    containerPosition: PropTypes.string,
    backgroundColor: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    margin: PropTypes.string,
    svgBackground: PropTypes.any,
    svgFill: PropTypes.any,
    svgHeight: PropTypes.string,
    svgOpacity: PropTypes.number,
    svgWidth: PropTypes.string,
    zIndex: PropTypes.number,
  };
  
  return SvgContainer;
  
};

withSvgContainer.propTypes = {
  Svg: PropTypes.objectOf(React.Component),
};

export default withSvgContainer;
