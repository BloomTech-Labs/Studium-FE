import React from 'react';
import styled from 'styled-components';
import StyledCreateCardBtn from '../Styled/StyledCreateCardBtn';
import { Icon } from 'antd';
import StyledContainer from '../Styled/StyledContainer';

export default function Footer( props ){
  
  return ( <StyledFooter { ...props } >
    <StyledContainer
      style={ {
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
      } } overFlowY={ 'visible' }>
      <StyledCreateCardBtn
        icon={ 'plus' }
        size={ 'large' }
        shape={ 'circle' }
      />
      <StyledIcon type="home" theme={ 'filled' }
                  color={ props.theme ? props.theme.darkDarkGray : 'gray' }/>
      <StyledIcon type="folder-open" theme={ 'filled' }
                  color={ props.theme ? props.theme.darkDarkGray : 'gray' }/>
    </StyledContainer>
  </StyledFooter> );
}

const StyledFooter = styled.div`
position: absolute;
bottom: ${ props => props.navBarVis ? 0 : '-75px' };
margin-top: auto;
min-width: 100vw;
height: 50px;
background-color: ${ props => props.theme.gray };
display: flex;
justify-content: center;
align-items: center;
  
`;

const StyledIcon = styled( Icon )`
 && {
  color: ${ props => props.color };
  font-size: 31px;
};
`;
