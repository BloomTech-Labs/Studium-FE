import React from 'react';
import styled from 'styled-components';
import SvgComponent from '../images/Component.js';
import {SynapsBrain} from '../components/SynapsBrain/SynapsBrain.js';
import {CreateButton} from '../components/Button/CreateButton.js';

export const Testing = () => {
  return ( <StyledTesting>
    <SvgComponent></SvgComponent>
  </StyledTesting> );
  return (
    <StyledTesting>
      <CreateButton />
    </StyledTesting>
  );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;
