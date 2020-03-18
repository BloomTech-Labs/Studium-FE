import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContainerDiv, NavBarAvatar } from "../index.js";
import { ReactComponent as SmallWhiteLogo } from "../../images/SmallWhiteLogo.svg";
import { signOut } from "../../actions";
import theming from "styled-theming";
import {
  useAppHooks, mediaQueries, sizes, useLogger,
} from "../../customHooks/useAppHooks.js";
import LogoLeft from "./LogoLeft.js";
import {
  APP_VIEW_DESKTOP, THEMING_VALUES, THEMING_VARIABLES,
} from "../../customHooks/themingRules.js";
import { APP_PATHS } from "../../customHooks/usePaths.js";
import { useComparPrevContext } from "../../customHooks/useComparPrevContext.js";

export const NAV_BAR_DEBUG_NAME = "Nav Bar";

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = () => {
  const { usersState, theme, dispatch, changePath, pathname, appView } = useAppHooks();
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( "" );
  const logger = useLogger( NAV_BAR_DEBUG_NAME );
  const { compareContext, printPrevContext } = useComparPrevContext(
    NAV_BAR_DEBUG_NAME,
    { theme, changePath, pathname, appView },
  );
  
  logger.logInfo( "Nav Bar rendered" );
  
  useEffect( () => {
    compareContext( { theme, changePath, pathname, appView } );
    printPrevContext( 5 );
  }, [ theme, changePath, pathname, appView ] );
  
  useEffect( () => {
    if( usersState.user && usersState.user.photoURL ){
      setAvatarUrl( usersState.user.photoURL );
    }else{
      setAvatarUrl( "" );
    }
  }, [ usersState ] );
  
  const logout = () => {
    setMenuOpen( false );
    signOut( dispatch );
  };
  
  const getSignUpText = () => {
    if( appView === APP_VIEW_DESKTOP ){
      if( pathname === APP_PATHS.SIGN_UP_PATH ){
        return <Styledh2>SignIn</Styledh2>;
      }else if( pathname === APP_PATHS.SIGN_IN_PATH ){
        return <Styledh2>SignUp</Styledh2>;
      }
    }else{
      return false;
    }
  };
  
  return (
    <StyledBar className={ "nav-bar" } theme={ theme }>
      <ContainerDiv
        justifyContent={ "space-between" }
        className={ "nav-bar-container" }
        flexDirection={ "row" }
        width={ "100%" }
        height={ "75px" }
        position={ "relative" }
        overFlowY={ "hidden" }
        backgroundColor={ "transparent" }
      >
        <LogoLeft/>
        
        <NavBarAvatar
          onClick={ logout }
          avatarUrl={ avatarUrl }
          className={ "ant-dropdown-link" }
        />
        
        { getSignUpText() }
      </ContainerDiv>
    </StyledBar>
  );
};

NavBar.propTypes = {};

const WhiteLogo = styled( SmallWhiteLogo )`

`;

const backgroundColor = theming( THEMING_VARIABLES.NAV_STYLE, {
  [ THEMING_VALUES.DARK ]: props => {
    
    return props.theme.navBarDark;
  },
  [ THEMING_VALUES.LIGHT ]: props => {
    
    return props.theme.navBarLight;
  },
} );

const StyledBar = styled.div`
  background: ${ backgroundColor };
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: 0;
  width: 100%;
  height: ${ props => props.theme.navBarTopHeight + "px" };

 
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
