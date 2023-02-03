import styled from "styled-components";

const SearchForm = styled.form`

  padding: 10px;
  border: solid 2px var(--gray-20);
  border-radius: var(--radius);
  
  & > input{
    width: -webkit-fill-available;
  };

  & > button {
    font-weight: 500;
    font-size: calc(14rem/16);
    :hover{
      background: var(--primary-50)
    }
  };

`
export const Input = styled.input`
  all: unset;
`

export default SearchForm;
