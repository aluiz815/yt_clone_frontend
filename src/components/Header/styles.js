import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
export const Container = styled.header`
  display: flex;
  padding: 5px;
  height: 15%;
  background-color: rgba(0, 0, 0);
  h1 {
    color: rgb(251, 209, 147);
    font-weight: bold;
  }
`;

export const Searchbar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  input {
    width: 50%;
    height: 30px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 5px;
  }
`;
export const Icon = styled(MdSearch)`
  display: flex;
  align-items: center;
  font-size: 30px;
  background-color: rgb(251, 209, 147);
  border: 0;
  border-radius: 0px 5px 5px 0px;
  color: black;
`;
