import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    height: 100vh;
    background-color: ${(props) => props.theme.colors.tertiary};
    overflow-y: scroll;

    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${(props) => props.theme.colors.primary};
    }

    ::-webkit-scrollbar-track{
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
