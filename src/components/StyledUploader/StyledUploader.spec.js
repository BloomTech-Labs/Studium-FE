import React from 'react';
import { render } from '@testing-library/react';
import SyledUploadeer from './StyledUploader';


describe( 'Styled Uploader', () => {
  test( 'snapshot renders', () => {
    const component = render( <SyledUploadeer id={ 1 }/> );
    let tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} );