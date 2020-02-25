import React from 'react';
import { render } from '@testing-library/react';
import SmallLogo from './SmallLogo';

// check logo in alt
test('check logo is in alt', () => {
  const { getByAltText } = render(<SmallLogo />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});


