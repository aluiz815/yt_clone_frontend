import styled from "styled-components";
import { darken } from "polished";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
export const Styles = styled.div`
  .container {
    max-width: 540px;
  }
  .form-user {
    background-color: rgb(0, 0, 0, 0.7);
    img.w-25 {
      width: 20% !important;
    }
    .form-group {
      label#thumbnail {
        margin-bottom: 20px;
        border: 1px solid rgb(251, 209, 147);
        background-color: white;
        background-size: cover;
        cursor: pointer;
        display: flex;
        width: 100%;
        height: 70px;
        justify-content: center;
        align-items: center;
      }
      label#thumbnail.has-thumbnail {
        border: 0;
      }
      label#thumbnail.has-thumbnail svg {
        display: none;
      }
      input.file {
        display: none;
      }
      input.videoFile {
        display: none;
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

export const Icon = styled(MdAddAPhoto)`
  display: flex;
  align-items: left;
  font-size: 30px;
  border: 0;
  color: rgb(251, 209, 147);
`;
