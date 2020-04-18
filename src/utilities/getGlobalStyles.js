import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  body {
        font-family: 'Source Sans Pro', sans-serif;
  }  
`;

export const getGlobalStyles = () => GlobalStyle;
