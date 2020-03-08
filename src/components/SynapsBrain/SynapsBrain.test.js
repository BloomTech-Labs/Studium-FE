import React from 'react';
import renderer from 'react-test-renderer';

import { SynapsBrain } from './SynapsBrain.js';

test( 'StyledCardDeck render correctly', () => {
  const tree = renderer.create( <SynapsBrain/> ).toJSON();
  expect( tree ).toMatchSnapshot();
} );