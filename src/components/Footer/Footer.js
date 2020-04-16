import React from 'react';
import styled from 'styled-components';
import theming from 'styled-theming';
import {ContainerDiv} from '../Container/ContainerDiv.js';
import PropTypes from 'prop-types';
import {THEME} from '../../utilities/constants.js';
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from '../../customHooks/themingRules.js';
import SvgPlusIcon from '../../svgComponents/SvgPlusIcon.js';

/**
 * Footer
 * @component
 * @example return (<Footer />)
 *
 */
export const Footer = (props) => {
  
  const {changePath, pathname} = props.getHooks();
  
  /**
   * Add Deck
   * @description Function called to add a deck to the users decks.
   * @function
   * @name addDeck
   */
  const addDeck = () => {
    
    changePath('/create/deck');
    
  };
  
  return (<StyledFooter {...props} className={'footer'}
                        pathname={pathname}>
    {pathname === './preview' && <Blur/>}
    <ContainerDiv
      className={'footer-container'}
      maxHeight={THEME.footerHeight + 'px'}
      height={THEME.footerHeight + 'px'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      overFlowY={'visible'}
      flexDirection={'row'}
    >
      <SvgPlusIcon onClick={() => addDeck()}/>
    </ContainerDiv>
  </StyledFooter>);
};

Footer.prototypes = {
  getHooks: PropTypes.func.isRequired,
  navBarVis: PropTypes.bool,
};

const Blur = styled.div`
position: absolute;
top: -80px;
min-width: 100vw;
height: 80px;
background-image: linear-gradient(transparent, #ffffff8c);
`;

const bottom = theming(THEMING_VARIABLES.FOOTER, {
  [THEMING_VALUES.HIDDEN]: '-75px',
  [THEMING_VALUES.VISIBLE]: '0',
});

const StyledFooter = styled.div`
  position: absolute;
  display: flex;
  bottom: ${bottom};
  margin-top: auto;
  min-width: 100vw;
  z-index: 1;
  height: ${THEME.footerHeight}px;
  background: #E1DED7;
  align-items: center;
  
`;

