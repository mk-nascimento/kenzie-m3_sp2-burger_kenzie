import styled from "styled-components";

const SearchForm = styled.form`

  border: solid 2px var(--gray-20);
  border-radius: var(--radius);
  padding: 10px;

  & > input{

    border: none;
    padding: 0 4px;
    width: 85%;

    :focus{
      outline:none;
    }
  };

  & > button {

    font-weight: 500;
    font-size: calc(14rem/16);
    width: 50%;

    :hover{
      background: var(--primary-50)
    }
  };

  @media screen and (min-width: 768px){

    width: 33%;

    & > input{
      width: 100%;
    };
  }

`

export default SearchForm;
