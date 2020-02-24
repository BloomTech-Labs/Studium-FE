import React from 'react';
import { render } from '@testing-library/react';
import SmallLogo from './SmallLogo';


test('renders learn react link', () => {

  const { getByAltText } = render(<SmallLogo />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
  // expect(render(<App />)).toMatchSnapShot()
});
