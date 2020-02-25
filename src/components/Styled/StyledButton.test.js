import React from 'react';
import styled from 'styled-components';
import testRenderer from 'react-test-renderer';
// import 'jest-styled-components';

import StyledButton from './StyledButton';


test('Button renderer correctly', () => {
    const tree = testRenderer.create(<StyledButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

