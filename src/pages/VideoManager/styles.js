import styled from "styled-components";
import { MdModeEdit, MdDelete } from "react-icons/md";
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
`;
export const Videos = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  align-items: space-between;
  h1 {
    text-align: center;
    color: #fff;
  }
  li {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 5px;
    img {
      border: 1px solid rgb(251, 209, 147);
      width: 100px;
      margin-right: 15px;
    }
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
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
export const Data = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  h2.Title {
    margin-bottom: 10px;
    color: rgb(251, 209, 147);
  }
  h2.Description {
    color: rgb(255, 255, 255);
  }
`;
