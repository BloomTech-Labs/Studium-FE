import React from 'react';
import renderer from 'react-test-renderer';

import {SmallFlashCard} from './SmallFlashCard.js';



test('StyledCardDeck render correctly', () => {
    const tree = renderer.create(<SmallFlashCard />).toJSON();
    expect(tree).toMatchSnapshot();
});