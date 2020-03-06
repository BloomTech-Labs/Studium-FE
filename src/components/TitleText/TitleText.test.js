import React from 'react';
import renderer from 'react-test-renderer';

import TitleText from './TitleText.js';



test('StyledTitleText render correctly', () => {
    const tree = renderer.create(<TitleText />).toJSON();
    expect(tree).toMatchSnapshot();
});