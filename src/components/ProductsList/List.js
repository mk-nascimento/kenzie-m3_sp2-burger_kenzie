import styled from "styled-components";

const ProductsUl = styled.ul`

  &{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: 20px 0;
    overflow-x: auto;
    gap: 20px;
  }

  @media screen and (min-width: 768px){

  &{
    max-width: 65%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: visible;
    padding: 0;
  }
    & > li{
      min-width: 100%;
    }
  }

`

export default ProductsUl;  
