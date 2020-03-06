import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from './SearchBar.js';



test('StyledSearchBar render correctly', () => {
    
    const search = (e) => {
    
    };
    
    const tree = renderer.create(<SearchBar onSearch={search}/>).toJSON();
    expect(tree).toMatchSnapshot();
});