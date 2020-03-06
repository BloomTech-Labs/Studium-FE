import React from 'react';
import renderer from 'react-test-renderer';

import Container from './ContainerDiv.js';



test('StyledContainer render correctly', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
});