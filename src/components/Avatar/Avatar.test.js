import React from 'react';
import renderer from 'react-test-renderer';
import {customRender} from '../../utilities/test-utils.js';

import {NavBarAvatar} from './NavBarAvatar.js';

test('StyledAvatar render correctly', () => {
  const {container} = customRender(<NavBarAvatar/>);
  expect(container).toMatchSnapshot();
});