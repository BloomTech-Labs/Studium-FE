import React from 'react';
import { render, findAllByTestId, findByTestId } from '../../util/test-utils';
import StyledUpload from './StyledUploader';
import '@testing-library/jest-dom';

describe('Styled Uploader', () => {
  test('snapshot renders', async () => {
    /**
     * @type {RenderResult} rencerResults
     */
    const rencerResults = render(<StyledUpload id={1} />);

    /**
     *
     * @type {HTMLElement} button
     */
    const button = await findByTestId(rencerResults.container, 'upload');

    expect(button).toMatchSnapshot();
  });

  test('To have a click button.', async () => {
    /**
     * @type {RenderResult} container
     */
    const container = render(<StyledUpload id={1} />);

    /**
     *
     * @type {HTMLElement} button
     */
    const button = await findByTestId(container.container, 'upload');

    print(button.getRootNode());
  });
});

/**
 *
 * @param {HTMLElement} element
 */
const print = element => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(node => {
      /**
       * @type {DocumentType} node
       */
      console.log(node);
    });
  }
  print(element.toString());
};
