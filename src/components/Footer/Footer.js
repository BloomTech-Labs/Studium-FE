import React from 'react';
import styled from 'styled-components';
import StyledCreateCardBtn from '../Styled/StyledCreateCardBtn';
import { Icon } from 'antd';
import { devices } from '../../util/breakpoints-device.js';
import StyledContainer from '../Styled/StyledContainer';

export default function Footer(props) {
  const addDeck = () => {
    props.history.push('/create/deck');
  };

  return (
    <StyledFooter {...props} className={'footer'}>
      <StyledContainer
        className={'footer-container'}
        maxHeight={'50px'}
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'relative',
        }}
        overFlowY={'visible'}
      >
        <StyledCreateCardBtn
          icon={'plus'}
          size={'large'}
          shape={'circle'}
          onClick={addDeck}
          visable={false}
        />
        <StyledIcon
          type="home"
          theme={'filled'}
          color={props.theme ? props.theme.darkDarkGray : 'gray'}
        />
        <StyledIcon
          type="folder-open"
          theme={'filled'}
          color={props.theme ? props.theme.darkDarkGray : 'gray'}
        />
      </StyledContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: absolute;
  bottom: ${props => (props.navBarVis ? 0 : '-75px')};
  margin-top: auto;
  min-width: 100vw;
  height: 50px;
  background-color: ${props => props.theme.gray};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ${devices.tablet} {
    bottom: -75px;
  }
`;

const StyledIcon = styled(Icon)`
  && {
    color: ${props => props.color};
    font-size: 31px;
  }
`;
