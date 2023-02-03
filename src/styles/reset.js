import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h3, p {
    margin: 0;
  };

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

`

export default Reset;
