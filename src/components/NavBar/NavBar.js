import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {ContainerDiv, NavBarAvatar} from "../index.js";
import {ReactComponent as SmallWhiteLogo} from "../../svgs/SmallWhiteLogo.svg";
import {signOut} from "../../actions";
import theming from "styled-theming";
import {
  useAppHooks,
} from "../../customHooks/useAppHooks.js";
import LogoLeft from "./LogoLeft.js";
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from "../../customHooks/themingRules.js";
import {useComparPrevContext} from "../../customHooks/useComparPrevContext.js";
import {
  APP_PATHS, APP_VIEW_DESKTOP, MEDIA_QUERIES, SIZES, THEME,
} from "../../utilities/constants.js";

export const NAV_BAR_DEBUG_NAME = "Nav Bar";

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = ({getHooks}) => {
  const {usersState, theme, getLogger, dispatch, changePath, path, appView} = getHooks(
    "Nav Bar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const logger = getLogger(NAV_BAR_DEBUG_NAME);
  const {compareContext, printPrevContext} = useComparPrevContext(
    NAV_BAR_DEBUG_NAME,
    {usersState, theme, getLogger, dispatch, changePath, path, appView},
  );
  
  logger.logVerbose("Nav Bar rendered");
  
  useEffect(() => {
    compareContext(
      {usersState, theme, path, appView});
  }, [usersState, theme, path, appView]);
  
  useEffect(() => {
    
    if(usersState.user && usersState.user.photoURL){
      setAvatarUrl(usersState.user.photoURL);
      
    }else{
      setAvatarUrl("");
      
    }
  }, [usersState]);
  
  const logout = () => {
    setMenuOpen(false);
    signOut(dispatch);
  };
  
  const navBarRightContent = () => {
    
    if(path === APP_PATHS.SIGN_UP_PATH || path === APP_PATHS.LANDING_PAGE){
      return <Styledh2 onClick={() => changePath(APP_PATHS.SIGN_IN_PATH)}>Sign
        In</Styledh2>;
    }else if(path === APP_PATHS.SIGN_IN_PATH){
      return <Styledh2 onClick={() => changePath(APP_PATHS.SIGN_UP_PATH)}>Sign
        Up</Styledh2>;
    }
    
    return (
      <NavBarAvatar
        getHooks={getHooks}
        onClick={logout}
        avatarUrl={avatarUrl}
        className={"ant-dropdown-link"}
      />
    );
    
  };
  
  return (
    <StyledBar className={"nav-bar"}>
      <ContainerDiv
        justifyContent={"space-between"}
        className={"nav-bar-container"}
        flexDirection={"row"}
        width={"100%"}
        height={"75px"}
        position={"relative"}
        overFlowY={"hidden"}
        backgroundColor={"transparent"}
      >
        <LogoLeft getHooks={getHooks}/>
        {navBarRightContent()}
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {};

const WhiteLogo = styled(SmallWhiteLogo)`

`;

const backgroundColor = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: props => {
    
    return props.theme.themeState.navBarDark;
  },
  [THEMING_VALUES.LIGHT]: props => {
    
    return props.theme.themeState.navBarLight;
  }, [THEMING_VALUES.HIDDEN]: props => {
    
    return "transparent";
  },
});

const top = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: props => {
    
    return 0;
  },
  [THEMING_VALUES.LIGHT]: props => {
    
    return 0;
  },
  [THEMING_VALUES.HIDDEN]: props => {
    
    return "-75px";
  },
});

const StyledBar = styled.div`
  background: ${backgroundColor};
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: ${top};
  width: 100%;
  height: ${props => props.theme.navBarTopHeight + "px"};

 
`;

const color = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: "white",
  [THEMING_VALUES.LIGHT]: props => props.theme.themeState.synapsDark,
  [THEMING_VALUES.HIDDEN]: props => props.theme.themeState.synapsDark,
});

const Styledh2 = styled.h2`
  display: flex;
  align-items: center;
  color: ${color};
  margin: 0 10% 0 0;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 24px;
`;

