import React from 'react';
import renderer from 'react-test-renderer';

import StyledDeckPreview from './StyledDeckPreview';

test('StyledDeckPreview render correctly', () => {
    const tree = renderer.create(<StyledDeckPreview />).toJSON();
    expect(tree).toMatchSnapshot();
});