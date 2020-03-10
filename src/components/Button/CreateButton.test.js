import React from 'react';
import renderer from 'react-test-renderer';

import {CreateButton} from './CreateButton.js';

test('Create Button works', () => {
    const tree = renderer.create(<CreateButton />).toJSON();
    expect(tree).toMatchSnapshot();
})
