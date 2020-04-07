import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import PropTypes from 'prop-types';

/**
 * Search Bar
 * @component
 * @example
 * const search = () => {};
 * return (
 *  <SearchBar onSearch={search} />
 * )
 */
export const SearchBar = props => {
  return <StyledAntdSearch { ...props }/>;
};

const StyledAntdSearch = styled( Input.Search )`
  && > .ant-input {
    height: ${ props => props.height || 'min-content' };
    border-radius: ${ props => props.borderRadius || props.theme.largeRadius };
    :focus {
      box-shadow: none;
      border-color: ${ props => props.theme.gray };
    }
  }
`;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
};

