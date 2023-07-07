import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(to bottom, #767B91, #2A324B);
    color: #E1E5EE;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`