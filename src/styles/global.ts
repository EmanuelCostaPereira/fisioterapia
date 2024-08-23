import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }
`
