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
    background: none;
    align-self: flex-end;
    padding: 0;
    font-weight: 500;
    font-size: calc(12rem/16);
    line-height: 15px;
  }
  & > .count {
    position: absolute;
    bottom: 6px;
    right: 0;
    gap: 4px;

    button {
      all: unset;
      cursor: pointer;
    }
  }

`

export default CartProductLi;
