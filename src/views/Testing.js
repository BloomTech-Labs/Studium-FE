import React from 'react';
import styled from 'styled-components';
import { SynapsBrain } from '../components/SynapsBrain/SynapsBrain.js';
import { CreateButton } from '..components/Button/CreateButton.js';

/**
 * Testing
 * @category Views
 * @component
 * @example return (<Testing />);
 */
export const Testing = () => {
  return ( <StyledTesting>
    <CreateButton/>
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

