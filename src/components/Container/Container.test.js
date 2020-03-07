import React from 'react';
import renderer from 'react-test-renderer';

import {ContainerDiv} from './ContainerDiv.js';



test('StyledContainer render correctly', () => {
    const tree = renderer.create(<ContainerDiv />).toJSON();
    expect(tree).toMatchSnapshot();
});