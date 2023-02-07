import styled from "styled-components";

const StyledAside = styled.aside`

  border-radius: 5px;

  h3 {
    text-align: center;
  }
  
  .Aside-Cart__header{
    border-radius: 5px 5px 0px 0px ;
    padding: 22px 20px;
  }


  .empty-cartProducts{
    padding: 50px 10px;
    gap: 8px;
  }

  @media screen and (min-width: 768px){

    height: fit-content;
    width: 33%;
    
  }

`

export default StyledAside;
