import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledAvatar from './StyledAvatar';
import { ReactComponent as SmallWhiteLogo } from '../../images/SmallWhiteLogo.svg';
import { Popover } from 'antd';
import { signout } from '../../actions';
import SmallLogo from './SmallLogo';
import { useDispatch, useSelector } from 'react-redux';

const StyledNavBar = ( { visable, ...props } ) => {
  
  const user = useSelector( state => state.usersReducer );
  const [ menuOpen, setMenuOpen ] = useState( false );
  const dispatch = useDispatch();
  
  const onAvatarClick = () => {
    setMenuOpen( !menuOpen );
  };
  
  const logout = () => {
    signout( dispatch );
  };
  
  const content = ( <div>
    <StyledLink onClick={ logout }>Logout</StyledLink>
  </div> );
  const url = user.user.photoURL;
  
  return ( <StyledBar visable={ visable }>
    <SmallWhiteLogo style={ {
      position: 'absolute', left: '6%', top: '45%',
    } }/>
    <Popover content={ content } visible={ menuOpen }
             placement="bottomRight">
      <StyledAvatar onClick={ onAvatarClick } avatarUrl={ url }
                    className={ 'ant-dropdown-link' }/>
    </Popover>
  </StyledBar> );
};

StyledNavBar.propTypes = {};

const StyledBar = styled.div`
position: absolute;
top: ${ props => props.visable ? '0' : '-74px' };
width: 100%;
height: 74px;
background-color: #585858;
transition: all 2s;

`;

const StyledLink = styled.a`
font-weight: bold;
`;

export default StyledNavBar;