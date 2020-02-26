import React from 'react';
import renderer from 'react-test-renderer';

import StyledNavBar from './StyledNavBar';

test('StyledNavBar render correctly', () => {
    const tree = renderer.create(<StyledNavBar />).toJSON();
    expect(tree).toMatchSnapshot();
});