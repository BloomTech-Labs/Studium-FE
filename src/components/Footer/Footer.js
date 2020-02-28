import React from 'react';
import styled from 'styled-components';

export default function Footer(props) {
  return <StyledFooter {...props} />;
}

const StyledFooter = styled.div`
  position: absolute;
  bottom: ${props => (props.navBarVis ? 0 : '-75px')};
  margin-top: auto;
  min-width: 100vw;
  height: 50px;
  background-color: #c4c4c4;
`;
