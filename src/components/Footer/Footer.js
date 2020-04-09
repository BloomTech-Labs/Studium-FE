import React from "react";
import styled from "styled-components";
import theming from "styled-theming";
import {Icon} from "antd";
import {ContainerDiv} from "../Container/ContainerDiv.js";
import PropTypes from "prop-types";
import {useAppHooks} from "../../customHooks/useAppHooks.js";
import {MEDIA_QUERIES} from "../../utilities/constants.js";
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from "../../customHooks/themingRules.js";

/**
 * Footer
 * @component
 * @example return (<Footer />)
 *
 */
export const Footer = (props) => {
  
  const {changePath, theme, pathname} = props.getHooks("Footer");
  
  /**
   * Add Deck
   * @description Function called to add a deck to the users decks.
   * @function
   * @name addDeck
   */
  const addDeck = () => {
    changePath("/create/deck");
    
  };
  
  return (<StyledFooter {...props} theme={theme} className={"footer"}
                        pathname={pathname}>
    {pathname === "./preview" && <Blur/>}
    <ContainerDiv
      className={"footer-container"}
      maxHeight={"50px"}
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
      overFlowY={"visible"}
      flexDirection={"row"}
    >
      
      <StyledIcon
        type="edit"
        color={theme ? theme.themeState.gray939598 : "gray"}
      />
      <StyledIcon
        type="delete"
        color={theme ? theme.themeState.grayD1D3D4 : "gray"}
      />
    </ContainerDiv>
  </StyledFooter>);
};

Footer.prototypes = {
  getHooks: PropTypes.func.isRequired,
  navBarVis: PropTypes.bool,
};

const Blur = styled.div`
position: absolute;
top: -80px;
min-width: 100vw;
height: 80px;
position: absolute;
background-image: linear-gradient(transparent, #ffffff8c);
`;

const bottom = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.HIDDEN]: "-75px",
  [THEMING_VALUES.VISIBLE]: "0",
});

const StyledFooter = styled.div`
  position: absolute;
  bottom: ${bottom};
  margin-top: auto;
  min-width: 100vw;
  height: 50px;
  background: #E1DED7;
  align-items: center;
  
`;

const StyledIcon = styled(Icon)`
  && {
    margin: 0 10%;
    color: ${props => props.color};
    font-size: 31px;
  }
`;
