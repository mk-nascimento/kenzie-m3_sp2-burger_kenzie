import styled from "styled-components";

const CartProductLi = styled.li`

  position: relative;
  gap: 10px;

  & > img{
    border-radius: 5px;
    height: 80px;
    width: 80px;
    object-fit: contain;
  }

  & > .info-product{
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 6px 0;
    width: -webkit-fill-available;
  }

  & > .info-product > button{
    /* position: absolute; */
    background: none;
    /* top: 8.75%; */
    /* right: 0; */
    align-self: flex-end;
    padding: 0;
    font-weight: 500;
    font-size: calc(12rem/16);
    line-height: 15px;
  }

`

export default CartProductLi;
