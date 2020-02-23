import React from 'react';
import styled from 'styled-components';

const StyledContainer = ( props ) => {
  return ( <Container { ...props }>
    { props.children }
  </Container> );
};

const Container = styled.div`
position: relative;
width: 100%;
max-width: 700px;
display: flex;
justify-content: ${ props => props.justifyContent || 'center' };
align-items: center;
justify-self: center;
`;

export default StyledContainer;