import styled from "styled-components";

const StyledLiCart = styled.li`

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
    height: calc(12rem/16);
    border-radius: 2px;
    bottom: 6px;
    right: 0;
    gap: 4px;

    svg {
      color: white;
    }

    button {
      all: unset;
      cursor: pointer;
      background: var(--primary);
      border-radius: 2px;
      display: flex;
    }
  }

`

export default StyledLiCart;
