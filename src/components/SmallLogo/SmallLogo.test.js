import React from 'react';
import { render } from '@testing-library/react';
import {SmallLogo} from './SmallLogo.js';
import renderer from 'react-test-renderer';



// check logo in alt
test('check logo is in alt', () => {
  const { getByAltText } = render(<SmallLogo />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
  // expect(render(<App />)).toMatchSnapShot()
});

test('SmallLogo render correctly', () => {
  const tree = renderer.create(<SmallLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});


