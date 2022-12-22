import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JaldiBold';
    font-style: normal;
    src: url('../font/Jaldi-Bold.ttf') format('truetype');
  }


  font-family: 'Apple SD Gothic Neo';
  a {
    text-decoration: none;
  color: black;
  margin-left: 125px;
  font-size: 12px;
  margin-top: 10px;
  color: #959595;
  }


`;

export default GlobalStyle;
