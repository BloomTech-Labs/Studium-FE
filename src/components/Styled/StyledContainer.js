import React from 'react';
import styled from 'styled-components';

const StyledContainer = ( props ) => {
  return ( <Container { ...props }>
    { props.children }
  </Container> );
};

const Container = styled.div`
margin: ${ props => props.navBarVis ? '75px auto' : ' 0 auto' };
min-height: 100%;
position: absolute;
width: 100%;
max-height: 100vh;
max-width: 700px;
display: flex;
justify-content: ${ props => props.justifyContent || 'center' };
overflow-y: auto;
`;

export default StyledContainer;
