import React from 'react';
import renderer from 'react-test-renderer';

import StyledInput from './StyledInput';

test('StyledInput render correctly', () => {
    const tree = renderer.create(<StyledInput />).toJSON();
    expect(tree).toMatchSnapshot();
});