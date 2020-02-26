import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SmallLogo from './SmallLogo';

// check logo in alt
test('check logo is in alt', () => {
  const { getByAltText } = render(<SmallLogo />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});

test('SmallLogo render correctly', () => {
  const tree = renderer.create(<SmallLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});


