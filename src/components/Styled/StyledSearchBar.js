import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const StyledSearchBar = props => {
  return <StyledAntdSearch {...props}></StyledAntdSearch>;
};

const StyledAntdSearch = styled(Input.Search)`
  && > .ant-input {
    border-radius: ${props => props.theme.largeRadius};
    :focus {
      box-shadow: none;
      border-color: ${props => props.theme.gray};
    }
  }
`;

StyledSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default StyledSearchBar;
