import { createGlobalStyle } from 'styled-components';
import SFMedium from 'assets/fonts/sf-medium.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFMedium';
    src: local('SFMedium'), local('SFMedium'),
    url(${SFMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  
  * {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  html {
    font-family: 'SFMedium', monospace;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    overflow: hidden;
    line-height: 1;
  }

  html,
  body {
    overscroll-behavior: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
  }

`;
