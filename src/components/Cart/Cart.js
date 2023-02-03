import styled from "styled-components";

const Aside = styled.aside`

  border-radius: 5px;
  
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
    width: 25%;
    
  }

`

export default Aside;
