import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

// creating a style that'll be applied to all components, and will reset the default styles
export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Montserrat', sans-serif !important
  }
`;
