import React from 'react';
import renderer from 'react-test-renderer';

import StyledSearchBar from './StyledSearchBar';



test('StyledSearchBar render correctly', () => {
    
    const search = (e) => {
    
    };
    
    const tree = renderer.create(<StyledSearchBar  onSearch={search}/>).toJSON();
    expect(tree).toMatchSnapshot();
});