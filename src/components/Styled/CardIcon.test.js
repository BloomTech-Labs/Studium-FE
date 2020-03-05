import React from 'react';
import renderer from 'react-test-renderer';

import CardIcon from './CardIcon';



test('CardIcon render correctly', () => {
    const tree = renderer.create(<CardIcon />).toJSON();
    expect(tree).toMatchSnapshot();
});