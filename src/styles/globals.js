import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  :root {
    --primary: #27AE60;
    --primary-50: #93D7AF;
    --secondary: #EB5757;
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --white:#FFF;
    --feedback-information: #155BCB;
    --feedback-negative: #E60000;
    --feedback-sucess: #168821;
    --feedback-warning: #FFCD07;
    --radius: 8px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--gray-20);
      box-shadow: var(--gray-100);
      -webkit-box-shadow: var(--gray-100);
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  }

  hr{
    width: 100%;
    border: solid 1px var(--gray-20);
  }
`

export default Global;
