import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { ReactComponent as AvatarIcon } from '../../images/ProfileIcons.svg';

const StyledAvatar = ( { avatarUrl, ...props } ) => {
  if( avatarUrl ){
    return ( <StyledAntAvatar src={ avatarUrl } { ...props } size={ 40 }/> );
  }
  return ( <AvatarIcon style={ {
    position: 'absolute', top: '15px', right: '8%',
  } } { ...props }/> );
};

const StyledAntAvatar = styled( Avatar )`
  && {
    position: absolute;
    background-color: #585858;
    filter: contrast(0.5);
    top: 35px;
    right: 8%;
    transform: translate(0, -50%);
  }
`;

StyledAvatar.propTypes = {};

export default StyledAvatar;