import styled from "styled-components";

const CompHeader = styled.header`

  .container{
    gap: 16px;

  }

  img{
    width: 158.94px;
    height: 36.83px;
    align-self: center;
  }

  @media screen and (min-width: 768px){

    div.container{
      flex-direction: row;
      justify-content: space-between;
    }

    form{
      width: 25%;
    }
  }

`

export default CompHeader;
