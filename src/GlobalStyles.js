import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    
    font-family: "Encode Sans Expanded", sans-serif;
    background: #ccfcf9;;
   
    
    text-decoration: none;

   
}

`;

export default GlobalStyle;
