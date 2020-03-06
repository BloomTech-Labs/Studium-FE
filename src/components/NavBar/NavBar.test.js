import React from 'react';
import {customRender} from '../../utilities/test-utils.js';

import NavBar from './NavBar.js';

test('StyledNavBar render correctly', () => {
  const {container} = customRender(<NavBar />);
  expect(container).toMatchSnapshot()
});
