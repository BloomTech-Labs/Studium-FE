import React from 'react';
import renderer from 'react-test-renderer';

import {FormInput} from './FormInput.js';



test('StyledInput render correctly', () => {
    const tree = renderer.create(<FormInput />).toJSON();
    expect(tree).toMatchSnapshot();
});