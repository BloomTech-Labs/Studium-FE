import React from 'react';
import renderer from 'react-test-renderer';

import StyledCardDeck from './StyledCardDeck';



test('StyledCardDeck render correctly', () => {
    const tree = renderer.create(<StyledCardDeck />).toJSON();
    expect(tree).toMatchSnapshot();
});