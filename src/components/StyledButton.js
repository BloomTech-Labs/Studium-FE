import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "antd";

const StyledButton = ( { text, type = "primary", size = "default", icon, shape, loading, block, ...props } ) => {
  return ( <StyledAntdButton type={ type } size={ size } icon={ icon }
                             shape={ shape }
                             loading={ loading && "loading" }
                             block={ block && "block" }{ ...props }
  >
    { text }
  </StyledAntdButton> );
};

StyledButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf( [ "primary", "dashed", "danger", "link" ] ),
  size: PropTypes.oneOf( [ "large", "default", "small" ] ),
  icon: PropTypes.string,
  shape: PropTypes.oneOf( [ "circle", "round" ] ),
  loading: PropTypes.bool,
  block: PropTypes.bool
};

const StyledAntdButton = styled( Button )`
  &&{
    background-color: ${ props => props.type == "danger" ? "red" :
  props.theme.mainColor };
  }
`;

export default StyledButton;