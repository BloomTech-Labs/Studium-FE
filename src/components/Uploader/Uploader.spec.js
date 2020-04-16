import React from 'react';
import {
  customRender, getNodesByType, getByTestId, fireEvent, store, getByRole,
} from '../../utilities/test-utils.js';
import { Uploader } from './Uploader.js';
import moxios from 'moxios';

/**
 * Test the styled uploader
 */
describe( 'Styled Uploader', () => {
  //Test that styled uploaded hasn't changed sience last snapshot.
  test( 'snapshot renders', async() => {
    //Call custom render to wrap the component in fake providers.
    const { debug, container } = customRender( <Uploader id={ 1 }/> );
    
    // log out the component to the console when debug is turned on in env

    
    // get the button from the container.
    const button = await getByTestId( container, 'upload' );
    
    // test button against snapshot
    expect( button ).toMatchSnapshot();
  } );
  
  test( 'To have a click button.', async done => {
    // create fake file.
    const file = new File( [ '(⌐□_□)' ], 'chucknorris.png', {
      type: 'image/png',
    } );
    
    // install moxios to catch the axios request going out.
    moxios.install();
    moxios.withMock( () => {
      // render the component
      const { container, debug } = customRender( <Uploader id={ 1 }/> );
      logOutMessageOrDebug( { debug } );
      
      // get state from the store
      const { photosState } = store.getState();
      
      // get all the html elements needed to upload the file
      let button = getByRole( container, 'button' );
      let uploadIcon = getByTestId( container, 'upload-icon' );
      let inputNode = getNodesByType( container, 'input' )[ 0 ];
      
      // check to make sure state is empty
      expect( photosState.photos ).toEqual( {} );
      // add the file to the input
      fireEvent.change( inputNode, { target: { files: [ file ] } } );
      // fire the upload event
      fireEvent.click( button );
      
      moxios.wait( () => {
        try{
          // check the axios request
          let request = moxios.requests.mostRecent();
          // respond with fake message from server
          request
            .respondWith( {
              status: 201, response: {
                photo: { public_id: file.name, photo_url: file.name },
              },
            } )
            .then( () => {
              logOutMessageOrDebug( { debug } );
              logOutMessageOrDebug( { message: photosState.toString() } );
              // get the image from the dom
              const avatar = getByTestId( container, 'upload-image' );
              expect( avatar ).toBeInTheDocument();
              expect( uploadIcon ).not.toBeInTheDocument();
              expect( photosState.photos[ 1 ].file ).toEqual( {
                url: file.name, public_id: file.name,
              } );
              // call done for async events.
              done();
            } );
        }catch( e ){
          done.fail();
        }
      } );
    } );
  } );
  
  afterEach( () => {
    moxios.uninstall();
  } );
} );
