import React from 'react';
import renderer from 'react-test-renderer';

import NavBarAvatar from './NavBarAvatar.js';



test('StyledAvatar render correctly', () => {
    const tree = renderer.create(<NavBarAvatar />).toJSON();
    expect(tree).toMatchSnapshot();
});