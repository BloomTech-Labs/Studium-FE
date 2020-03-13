import React from 'react';
import PropTypes from 'prop-types';
import {SvgContainer} from '../SvgContainer/SvgContainer.js';
import {ReactComponent as CardNumZeroSvg} from '../../images/CardNumZero.svg';

export const SmallDeckSvg = props => {
  return (
    <div>
      <SvgContainer
        // backgroundColor={'#4CB69F'}
        strokeColor={'#F6F5F3'}
        color={'#4CB69F'}
        svg={CardNumZeroSvg}
      />
    </div>
  );
};

SmallDeckSvg.propTypes = {};
