import React from 'react';
import {customRender} from '../../utilities/test-utils.js';

import StyledNavBar from './StyledNavBar';

test('StyledNavBar render correctly', () => {
  const {container} = customRender(<StyledNavBar />);
  expect(container).toMatchSnapshot()
});
