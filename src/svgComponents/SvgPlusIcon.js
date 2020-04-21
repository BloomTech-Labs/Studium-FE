import React from 'react';
import styled from 'styled-components';

/**
 *   SvgPlusIcon
 *
 *  @component
 *
 */
const SvgPlusIcon = ({onClick}) => {
  return (
    <Container onClick={onClick} data-testid={'plus icon'}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.5254 4.0678C19.5254 1.82121 17.7042 0 15.4576 0C13.211 0 11.3898 1.82121 11.3898 4.0678V11.9322H4.0678C1.82121 11.9322 0 13.7534 0 16C0 18.2466 1.82121 20.0678 4.0678 20.0678H11.3898V27.9322C11.3898 30.1788 13.211 32 15.4576 32C17.7042 32 19.5254 30.1788 19.5254 27.9322V20.0678H27.9322C30.1788 20.0678 32 18.2466 32 16C32 13.7534 30.1788 11.9322 27.9322 11.9322H19.5254V4.0678Z"
          fill="#2A685B"/>
      </svg>
    
    </Container>
  );
};

const Container = styled.div`
&:hover{
 cursor: pointer;
}
`;

export default SvgPlusIcon;