import React from 'react';
import renderer from 'react-test-renderer';

import StyledUploader from './StyledUploader';

test('StyledUploader render correctly', () => {
    const tree = renderer.create(<StyledUploader />).toJSON();
    expect(tree).toMatchSnapshot();
});