import styled from "styled-components";
import { darken } from "polished";
export const Styles = styled.div`
  .container {
    max-width: 540px;
    form {
      text-align: center;
      color: #fff;
    }
  }
  .form-user {
    background-color: rgb(0, 0, 0, 0.7);
    img.w-25 {
      width: 20% !important;
    }
    .form-group {
      label {
        color: #fff;
      }
      span {
        color: red;
        margin: 0 0 10px;
        font-weight: bold;
      }
    }
    .btn-group {
      button.btn-danger {
        transition: background-color 0.2s;
        &:hover {
          background-color: ${darken(0.3, "#dc3545")};
        }
      }
    }
  }
`;
