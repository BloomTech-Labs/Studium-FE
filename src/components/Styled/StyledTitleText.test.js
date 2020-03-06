import React from 'react';
import renderer from 'react-test-renderer';

import StyledTitleText from './StyledTitleText';



test('StyledTitleText render correctly', () => {
    const tree = renderer.create(<StyledTitleText />).toJSON();
    expect(tree).toMatchSnapshot();
});