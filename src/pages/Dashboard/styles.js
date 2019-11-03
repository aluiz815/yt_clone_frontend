import styled from "styled-components";
import { darken } from "polished";
export const Styles = styled.div`
  .media {
    flex-direction: column;
    p {
      color: #fff;
    }
    img {
      transition: border 0.1s;

      &:hover {
        border: 1px solid ${darken(0.1, "#fbc993")};
      }
    }
  }
  .container {
    .row {
      background-color: rgb(0, 0, 0, 0.6);
    }
  }
`;
