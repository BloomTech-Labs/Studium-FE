import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContainerDiv, NavBarAvatar } from "../index.js";
import { ReactComponent as SmallWhiteLogo } from "../../images/SmallWhiteLogo.svg";
import { signOut } from "../../actions";
import theming from "styled-theming";
import {
  useAppHooks, mediaQueries, sizes,
} from "../../customHooks/useAppHooks.js";
import LogoLeft from "./LogoLeft.js";

/**
 * Nav Bar
 *
 * @component
 * @example
 *  return (<NavBar />)
 */
export const NavBar = () => {
  const { usersState, theme, dispatch, changePath, pathname } = useAppHooks();
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( "" );
  
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
    if( theme.screenWidth > 768 ){
      if( pathname === "/signup" ){
        return <Styledh2>SignIn</Styledh2>;
      }else if( pathname === "/signin" ){
        return <Styledh2>SignUp</Styledh2>;
      }
    }else{
      return false;
    }
  };
  
  return (
    <StyledBar className={ "nav-bar" }>
      <ContainerDiv
        justifyContent={ "space-between" }
        className={ "nav-bar-container" }
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

NavBar.propTypes = {
  backgroundColor: PropTypes.string,
};

const WhiteLogo = styled( SmallWhiteLogo )`

`;

const backgroundColor = theming( "navStyle", {
  light: props => props.theme.navBarLight,
  dark: props => props.theme.navBarDark,
} );

const StyledBar = styled.div`
  background-color: ${ backgroundColor };
  display: flex;
  justify-content: center;
  z-index: 15;
  position: absolute;
  top: 0;
  width: 100%;
  height: ${ props => props.theme.navBarTopHeight + "px" };

  @media screen and ${ mediaQueries.tablet } {
  
  }
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
