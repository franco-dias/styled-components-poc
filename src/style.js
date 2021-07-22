import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --red: #ff0000;
    --white: #ffffff;
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    background: black;
    background: #333;
  }

  * {
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

`