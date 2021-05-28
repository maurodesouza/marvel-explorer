import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: default;
  }

  html {
    font-size: 10px;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  textarea {
    cursor: text;
  }

  ${({ theme }) => css`
    body,
    button,
    input,
    textarea {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.large};
    }

    body {
      background: ${theme.colors.black};
    }
  `}
`;

export default GlobalStyles;
