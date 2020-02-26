import React from 'react';
import styled from 'styled-components';
import folder from '../../images/folder-icon.png';
import home from '../../images/home.png';
import plus from '../../images/plus.png';
import circle from '../../images/circle.png';

export default function Footer( props ){
  return ( <StyledFooter { ...props } >

  <img src={ home }
  style={ {
    position: 'absolute',
    top: '20.47%',
    left: '10.67%',
    right: '80.69%',
    bottom: '2.63%',
  } }></img>

<img src={ folder }
  style={ {
    position: 'absolute',
    width: '37.59px',
    height: '19.73',
    top: '22.47%',
    left: '288px',
  } }></img>

{/* <img src={ plus }
  style={ {
    position: 'absolute',
    width: '29px',
    height: '29px',
    top: '22.47%',
    left: '165px',
  } }></img> */}

<img src={ circle }
  style={ {
    position: 'absolute',
    width: '89px',
    height: '89px',
    top: '-86.53%',
    left: '139px',
    boxSizing: 'border-box',
  } }></img>

<img src={ plus }
  style={ {
    position: 'absolute',
    width: '39px',
    height: '39px',
    top: '-25.53%',
    left: '165px',
  } }></img>

  </StyledFooter> 
  );
}

const StyledFooter = styled.div`
position: absolute;
bottom: ${ props => props.navBarVis ? 0 : '-75px' };
  margin-top: auto;
  min-width: 100vw;
 height: 50px;
  background-color: #c4c4c4;
  
`;
