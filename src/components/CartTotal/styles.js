import styled from "styled-components";

const StyledDivTotal = styled.div`

  padding: 18px;
  gap: 22px;
  
  & > div {
    justify-content: space-between;
  }

  & > button {

    :hover{
      background: var(--gray-50);
      color: var(--gray-20);
    }
  }

`

export default StyledDivTotal;
