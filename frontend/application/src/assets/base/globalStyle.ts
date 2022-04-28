import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Scrollbar } from "./mixins";
import { white } from "./colors";

// creating a style that'll be applied to all components, and will reset the default styles
export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${Scrollbar};
  * {
    font-family: 'Montserrat', sans-serif !important
  }
  body {
    background-color: ${white} ;
  }
`;
