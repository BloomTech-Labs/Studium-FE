import React from 'react';
import renderer from 'react-test-renderer';

import SynapsButton from './SynapsButton.js';



test('StyledButton render correctly', () => {
    const tree = renderer.create(<SynapsButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

