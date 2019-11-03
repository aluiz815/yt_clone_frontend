import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
  .navbar {
    background-color: rgb(0, 0, 0, 0.4);
    button.navbar-toggler {
      background-color: rgb(251, 201, 147);
    }
  }
  a.navbar-brand {
    color: rgb(251, 201, 147);
    transition: color 0.2s;
    &:hover {
      color: ${darken(0.09, "#FBC993")};
    }
  }
  .navbar-nav {
    a.nav-link {
      color: "#000";
      transition: color 0.2s;
      border: 1px solid rgb(251, 201, 147);
      margin-right: 5px;
      background-color: rgb(251, 201, 147);
      border-radius: 5px;
      &:hover {
        color: ${darken(0.09, "#fff")};
      }
    }
    .upload {
      font-size: 30px;
      color: white;
      transition: color 0.2s;
      &:hover {
        color: ${darken(0.09, "#FBC993")};
      }
    }
  }
  form {
  }
  form.form-inline {
    input.form-control {
      border-radius: 5px 0px 0px 5px;
    }
    button.btn {
      border: 0;
      background-color: rgb(251, 201, 147);
      border-radius: 0px 5px 5px 0px;
      svg {
        font-size: 24px;
        color: rgb(0, 0, 0);
        transition: color 0.2s;
        &:hover {
          color: ${darken(0.09, "#fff")};
        }
      }
    }
  }
  .navbar-collapse {
    img.w-25 {
      width: 10% !important;
    }
  }
`;
