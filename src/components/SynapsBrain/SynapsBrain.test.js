import React from 'react';
import { customRender } from '../../utilities/test-utils.js';

import { SynapsBrain } from './SynapsBrain.js';

test( 'Synaps Brain renders correctly', () => {
  const { container } = customRender( <SynapsBrain/> );
  expect( container ).toMatchSnapshot();
} );