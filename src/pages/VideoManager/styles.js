import styled from "styled-components";
import { MdModeEdit, MdDelete } from "react-icons/md";
export const Styles = styled.div`
  .list-group {
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .list-group-item {
    display: flex;
    flex-direction: row;
    background-color: rgb(0, 0, 0, 0.4);
    img {
      border: 1px solid rgb(251, 201, 147);
    }
    .data {
      display: flex;
      flex-direction: column;
      padding: 10px;
      p {
        color: #fff;
      }
    }

    .icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      svg {
        color: #fff;
        font-size: 30px;
      }
    }
  }
`;

export const IconEdit = styled(MdModeEdit)`
  font-size: 30px;
  margin-bottom: 20px;
  color: #fff;
`;
export const IconDelete = styled(MdDelete)`
  font-size: 30px;
  color: #fff;
`;
