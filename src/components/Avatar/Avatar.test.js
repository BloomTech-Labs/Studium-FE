import React from 'react';
import {customRender} from '../../utilities/test-utils.js';

import {NavBarAvatar} from './NavBarAvatar.js';

test('StyledAvatar render correctly', () => {
  const {container} = customRender(<NavBarAvatar/>);
  expect(container).toMatchSnapshot();
});