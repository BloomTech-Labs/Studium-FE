import React from 'react';
import renderer from 'react-test-renderer';

import StyledAvatar from './StyledAvatar';

test('StyledAvatar render correctly', () => {
    const tree = renderer.create(<StyledAvatar />).toJSON();
    expect(tree).toMatchSnapshot();
});