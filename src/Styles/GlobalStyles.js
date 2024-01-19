import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


`;

export default GlobalStyle;
