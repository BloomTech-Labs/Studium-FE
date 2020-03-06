import React from 'react';
import renderer from 'react-test-renderer';

import SynapsText from './SynapsText.js';



test('StyledSynapsText render correctly', () => {
    const tree = renderer.create(<SynapsText />).toJSON();
    expect(tree).toMatchSnapshot();
});