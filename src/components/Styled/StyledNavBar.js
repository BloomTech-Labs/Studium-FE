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

const StyledNavBar = ( { visable, ...props } ) => {
  
  const user = useSelector( state => state.usersReducer );
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ avatarUrl, setAvatarUrl ] = useState( false );
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( visable ){
      if( user.user && user.user.photoURL ){
        setAvatarUrl( user.user.photoURL );
      }else{
        setAvatarUrl( false );
      }
    }else{
      setAvatarUrl( false );
    }
  }, [ visable, user ] );
  
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
  
  return ( <StyledBar visable={ visable }>
    <StyledContainer justifyContent={ 'space-between' }>
      <SmallWhiteLogo style={ {
        position: 'absolute', left: '6%', top: '45%',
      } }/>
      <Popover content={ content } visible={ menuOpen }
               placement="bottomRight">
        <StyledAvatar onClick={ onAvatarClick } avatarUrl={ avatarUrl }
                      className={ 'ant-dropdown-link' }/>
      </Popover>
    </StyledContainer>
  </StyledBar> );
};

StyledNavBar.propTypes = {};

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