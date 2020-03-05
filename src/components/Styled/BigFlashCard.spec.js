import React from 'react';
import renderer from 'react-test-renderer';

import BigFlashCard from './BigFlashCard';



test('BigFlashCard render correctly', () => {
    const tree = renderer.create(<BigFlashCard flashCard={{question: "This is" +
        " a question", answer: "This is the answer."}} />).toJSON();
    expect(tree).toMatchSnapshot();
});