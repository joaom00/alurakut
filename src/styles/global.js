import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.background};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    outline: 0;
    border: 0;
  }

  input {
    transition: 0.3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
`}
`

export default GlobalStyle
