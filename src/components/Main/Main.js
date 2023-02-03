import styled from "styled-components";

const ScMain = styled.main`

  margin-bottom: 40px;

  div.container {
    gap: 20px;
  }

  @media screen and (min-width: 768px){
    
    div.container{
      flex-direction: row;
      justify-content: space-between;
    } 
  }

`

export default ScMain;
