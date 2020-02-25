import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledAvatar from './StyledAvatar';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { Popover } from 'antd';
import { signout } from '../../actions';
import SmallLogo from './SmallLogo';
import { useDispatch, useSelector } from 'react-redux';
import StyledContainer from './StyledContainer';

const StyledNavBar = ( { navBarVis, ...props } ) => {
  
  const user = useSelector( state => state.users );
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( false );
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( navBarVis ){
      if( user.user && user.user.photoURL ){
        setAvatarUrl( user.user.photoURL );
      }else{
        setAvatarUrl( false );
      }
    }else{
      setAvatarUrl( false );
    }
  }, [ navBarVis, user ] );
  
  const onAvatarClick = () => {
    setMenuOpen( !menuOpen );
  };
  
  const logout = () => {
    setMenuOpen( false );
    signout( dispatch );
  };
  
  const changeRoute = ( route ) => {
    setMenuOpen( false );
    props.history.push( route );
  };
  
  const content = ( <StyledMenu>
    <StyledLink onClick={ logout }>Logout</StyledLink>
    <StyledLink
      onClick={ () => changeRoute( '/dashboard' ) }>Dashboard</StyledLink>
    <StyledLink onClick={ () => changeRoute( '/create/deck' ) }>Create
      Deck</StyledLink>
    <StyledLink onClick={ () => changeRoute( '/preview' ) }>Preview</StyledLink>
    
    <StyledLink onClick={ () => changeRoute( '/game' ) }>Game</StyledLink>
  </StyledMenu> );
  
  return ( <StyledBar visable={ navBarVis } className={ 'nav-bar' }>
    <StyledContainer justifyContent={ 'space-between' }
                     className={ 'nav-bar-container' } height={ '75px' }
                     position={ 'relative' }
    >
      <SmallWhiteLogo style={ {
        position: 'absolute',
        left: '6%',
        top: '50%',
        transform: 'transition(0, -53%)',
      } }/>
      <Popover content={ content } visible={ menuOpen }
               placement="bottomRight">
        <StyledAvatar onClick={ onAvatarClick } avatarUrl={ avatarUrl }
                      className={ 'ant-dropdown-link' }/>
      </Popover>
    </StyledContainer>
  </StyledBar> );
};

StyledNavBar.propTypes = {
  visible: PropTypes.bool,
};

const StyledMenu = styled.div`
display: flex;
flex-direction: column;
`;

const StyledBar = styled.div`
background-color: #585858;
display: flex;
justify-content: center;
z-index: 15;
position: absolute;
top: ${ props => props.visable ? '0' : '-74px' };
width: 100%;
height: 74px;
transition: all 2s;

`;

const StyledLink = styled.a`
font-weight: bold;
color: #0925658c;
`;

export default StyledNavBar;