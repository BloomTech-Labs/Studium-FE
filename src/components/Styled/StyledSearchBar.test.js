import React from 'react';
import renderer from 'react-test-renderer';

import StyledSearchBar from './StyledSearchBar';

test('StyledSearchBar render correctly', () => {
    const tree = renderer.create(<StyledSearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
});