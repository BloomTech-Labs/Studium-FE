import React from 'react';
import styled from 'styled-components';
import theming from 'styled-theming';
import {ContainerDiv} from '../Container/ContainerDiv.js';
import PropTypes from 'prop-types';
import {APP_PATHS, THEME} from '../../utilities/constants.js';
import {
  THEMING_VALUES, THEMING_VARIABLES,
} from '../../customHooks/themingRules.js';
import SvgPlusIcon from '../../svgComponents/SvgPlusIcon.js';
import {Icon} from 'antd';
import {ReactComponent as Delete} from '../../svgs/delete.svg';

/**
 * Footer
 * @component
 * @example return (<Footer />)
 *
 */
export const Footer = (props) => {

  const {changePath, path, setDeleteClicked, selectingCards} = props.getHooks();

  /**
   * Add Deck
   * @description Function called to add a deck to the users decks.
   * @function
   * @name addDeck
   */
  const addDeck = () => {
    changePath('/create/deck');
  };

  const getFooterIcons = () => {
    
    if (path === APP_PATHS.QUIZ_MODE) {
      return <Icons onClick={() => changePath(APP_PATHS.DASHBOARD_PATH)}
                    type={'home'}/>;
    } else if (path === APP_PATHS.PREVIEW_DECK_PATH) {

      if (selectingCards) {
        return <Delete onClick={() => setDeleteClicked(true)}></Delete>;
      }
    } else {
      return <SvgPlusIcon onClick={() => addDeck()}/>;
    }
  };

  return (<StyledFooter {...props} className={'footer'}
                        pathname={path}>
    {path === './preview' && <Blur/>}
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
      {getFooterIcons()}

    </ContainerDiv>
  </StyledFooter>);
};

const Icons = styled(Icon)`
font-size: 40px;
`;

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

