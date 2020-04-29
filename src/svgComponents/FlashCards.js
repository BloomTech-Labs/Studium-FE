import React from 'react';
import styled from 'styled-components';
import {APP_VIEW_MOBILE} from '../utilities/constants.js';

/**
 *   FlashCards
 *
 *  @component
 *
 */
const FlashCards = ({appView, width, height}) => {
  return (
    <Container>
      <Svg className={'svg1'}
           width={appView === APP_VIEW_MOBILE ? '277' : 1.2 * 277}
           height={appView === APP_VIEW_MOBILE ? '408' : 1.2 * 408}
           viewBox="0 0 277 408"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect x="0.491211" width="276.311" height="407.558" rx="11"
              fill="#FFF5E2"/>
      </Svg>
      <Svg className={'svg2'}
           width={appView === APP_VIEW_MOBILE ? '277' : 1.2 * 277}
           height={appView === APP_VIEW_MOBILE ? '408' : 1.2 * 408}
           viewBox="0 0 262 385"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect x="0.949219" width="260.717" height="384.558" rx="11"
              fill="#E9E0D0"/>
      </Svg>
    </Container>
  );
};

const Svg = styled.svg`
position:absolute;

left: 50%;
transform: translate(-50%, -50%);
&.svg1{
z-index: 1;
top: 58%;

}

&.svg2 {
z-index: 0;
top: 63%;
}

`;

const Container = styled.div`
`;

FlashCards.propTypes = {};

export default FlashCards;