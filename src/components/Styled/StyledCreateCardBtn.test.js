import React from 'react';
import renderer from 'react-test-renderer';

import StyledCreateCardBtn from './StyledCreateCardBtn';

test('StyledCreateCardBtn render correctly', () => {
    const tree = renderer.create(<StyledCreateCardBtn />).toJSON();
    expect(tree).toMatchSnapshot();
});