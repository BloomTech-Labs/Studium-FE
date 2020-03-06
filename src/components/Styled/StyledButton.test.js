import React from 'react';
import renderer from 'react-test-renderer';

import StyledButton from './StyledButton';



test('StyledButton render correctly', () => {
    const tree = renderer.create(<StyledButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

