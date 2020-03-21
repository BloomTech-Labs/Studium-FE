import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {ContainerDiv, NavBarAvatar} from "../index.js";
import {ReactComponent as SmallWhiteLogo} from "../../images/SmallWhiteLogo.svg";
import {signOut} from "../../actions";
import theming from "styled-theming";
import {
  useAppHooks, mediaQueries, sizes,
} from "../../customHooks/useAppHooks.js";
import LogoLeft from "./LogoLeft.js";
import {
  APP_VIEW_DESKTOP, THEMING_VALUES, THEMING_VARIABLES,
} from "../../customHooks/themingRules.js";
import {APP_PATHS} from "../../customHooks/usePaths.js";
import {useComparPrevContext} from "../../customHooks/useComparPrevContext.js";

export const NAV_BAR_DEBUG_NAME = "Nav Bar";

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = () => {
  const {usersState, theme, themingRules, getLogger, dispatch, changePath, path, appView} = useAppHooks(
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
      {usersState, theme, path, appView, themingRules});
  }, [usersState, theme, path, appView, themingRules]);
  
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
  
  const getSignUpText = () => {
    
    if(appView === APP_VIEW_DESKTOP){
      
      if(path === APP_PATHS.SIGN_UP_PATH){
        
        return <Styledh2>SignIn</Styledh2>;
        
      }else if(path === APP_PATHS.SIGN_IN_PATH){
        
        return <Styledh2>SignUp</Styledh2>;
      }
    }else{
      return false;
    }
  };
  
  return (
    <StyledBar className={"nav-bar"} theme={themingRules} themeValuees={theme}>
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
        <LogoLeft/>
        
        <NavBarAvatar
          onClick={logout}
          avatarUrl={avatarUrl}
          className={"ant-dropdown-link"}
        />
        
        {getSignUpText()}
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {};

const WhiteLogo = styled(SmallWhiteLogo)`

`;

const backgroundColor = theming(THEMING_VARIABLES.NAV_STYLE, {
  [THEMING_VALUES.DARK]: props => {
    
    return props.themeValuees.navBarDark;
  },
  [THEMING_VALUES.LIGHT]: props => {
    
    return props.themeValuees.navBarLight;
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

const Styledh2 = styled.h2`
  display: flex;
  align-items: center;
  color: #fff;
  position: absolute;
  width: 95px;
  height: 24px;
  left: 1197px;
  top: 38px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 24px;
`;

