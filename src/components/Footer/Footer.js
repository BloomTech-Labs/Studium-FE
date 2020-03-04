import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { devices } from '../../utilities/breakpoints-device.js';
import StyledContainer from '../Styled/StyledContainer';
import PropTypes from 'prop-types';

/**
 * @typedef FooterProps
 * @param {Theme} theme
 * @param {History} history
 * @return {*}
 */

/**
 * Footer component.
 * @param {FooterProps} props
 * @return {*}
 */
export const Footer = props => {
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
};

Footer.prototypes = {
  theme: PropTypes.object,
  history: PropTypes.object,
};

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
