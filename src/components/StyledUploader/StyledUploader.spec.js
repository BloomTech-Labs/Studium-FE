import React from 'react';
import { render } from '../../util/test-utils';

describe( 'Styled Uploader', () => {
  test( 'snapshot renders', () => {
    const all = render( <StyledUpload id={ 1 }/> );
    const container = document.querySelectorAll( '.upload' );
    
    expect( container ).toMatchSnapshot();
    
  } );
} );