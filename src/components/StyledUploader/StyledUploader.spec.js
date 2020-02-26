import React from 'react';
import { render } from '../../util/test-utils';
import StyledUpload from './StyledUploader';

describe('Styled Uploader', () => {
  test('snapshot renders', () => {
    const all = render(<StyledUpload id={1} />);
    const container = expect(container).toMatchSnapshot();
  });
});
