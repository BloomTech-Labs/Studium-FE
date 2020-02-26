import React from 'react';
import renderer from 'react-test-renderer';

import BigFlashCard from './BigFlashCard';

test('BigFlashCard render correctly', () => {
    const tree = renderer.create(<BigFlashCard />).toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree)
});