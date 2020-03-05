import React from 'react';
import renderer from 'react-test-renderer';

import StyledSynapsText from './StyledSynapsText';



test('StyledSynapsText render correctly', () => {
    const tree = renderer.create(<StyledSynapsText />).toJSON();
    expect(tree).toMatchSnapshot();
});