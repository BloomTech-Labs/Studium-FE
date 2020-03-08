import React from 'react';
import renderer from 'react-test-renderer';

import {PreviewDeckCards} from './PreviewDeckCards.js';



test('StyledDeckPreview render correctly', () => {
    const tree = renderer.create(<PreviewDeckCards />).toJSON();
    expect(tree).toMatchSnapshot();
});