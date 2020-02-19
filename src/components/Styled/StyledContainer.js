import React from 'react';
import styled from 'styled-components';

const StyledContainer = ( props ) => {
  return ( <Container { ...props }>
    { props.children }
  </Container> );
};

const Container = styled.div`
margin-top: ${ props => props.navBarVis ? '75px' : 0 }
margin-bottom: ${ props => props.navBarVis ? '75px' : 0 }
min-height: 100%;
position: relative;
width: 100%;
max-height: 100vh;
max-width: 700px;
display: flex;
justify-content: ${ props => props.justifyContent || 'center' };
align-items: center;
justify-self: center;
overflow-y: scroll;
`;

export default StyledContainer;