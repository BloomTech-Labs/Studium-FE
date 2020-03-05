import React from 'react';
import renderer from 'react-test-renderer';

import StyledContainer from './StyledContainer';



test('StyledContainer render correctly', () => {
    const tree = renderer.create(<StyledContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});