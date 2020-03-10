import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${ reset }
`;

export const getGlobalStyles = () => GlobalStyle;