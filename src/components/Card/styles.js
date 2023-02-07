import styled from "styled-components";

const StyledLiCard = styled.li`

  margin: 0;
  min-width: calc(300rem/16);
  min-height: calc(346rem/16);
  max-width: calc(300rem/16);
  max-height: calc(346rem/16);
  border: 2px solid var(--gray-20);
  border-radius: 5px;

  &:focus, &:hover{
    scale: 1.1;
  };

  img{
    object-fit: contain;
    width: 100%;
    height: 150px;
  };
  
  .info-card{
    padding: 24px 20px;
    gap: 14px;
    height: calc(100% - 150px);
  };

  button{
    align-self: flex-start;
    :hover{
      background: var(--primary-50);
    }
  }

`

export default StyledLiCard
