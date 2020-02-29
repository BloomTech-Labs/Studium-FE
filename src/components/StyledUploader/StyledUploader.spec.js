import React from 'react';
import {
  customRender,
  getNodesByType,
  getByTestId,
  fireEvent,
  store,
  getByRole,
  logOutMessageOrDebug,
} from '../../utilities/test-utils.js';
import StyledUpload from './StyledUploader';
import moxios from 'moxios';

/**
 * Test the styled uploader
 */
describe('Styled Uploader', () => {
  //Test that styled uploaded hasn't changed sience last snapshot.
  test('snapshot renders', async () => {
    //Call custom render to wrap the component in fake providers.
    const { container, debug } = customRender(<StyledUpload id={1} />);

    // log out the component to the console when debug is turned on in env
    logOutMessageOrDebug({ debug });

    const button = await getByTestId(container, 'upload');

    expect(button).toMatchSnapshot();
  });

  test('To have a click button.', async done => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });
    moxios.install();
    moxios.withMock(() => {
      const { container, debug } = customRender(<StyledUpload id={1} />);
      logOutMessageOrDebug({ debug });
      const { photosReducer } = store.getState();
      let button = getByRole(container, 'button');
      let uploadIcon = getByTestId(container, 'upload-icon');
      let inputNode = getNodesByType(container, 'input')[0];
      expect(photosReducer.photos).toEqual({});
      fireEvent.change(inputNode, { target: { files: [file] } });
      fireEvent.click(button);

      moxios.wait(() => {
        try {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 201,
              response: {
                photo: { public_id: file.name, photo_url: file.name },
              },
            })
            .then(() => {
              logOutMessageOrDebug({ debug });
              logOutMessageOrDebug({ message: photosReducer.toString() });
              const avatar = getByTestId(container, 'upload-image');
              expect(avatar).toBeInTheDocument();
              expect(uploadIcon).not.toBeInTheDocument();
              expect(photosReducer.photos[1].file).toEqual({
                url: file.name,
                public_id: file.name,
              });
              done();
            });
        } catch (e) {
          done.fail();
        }
      });
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });
});
