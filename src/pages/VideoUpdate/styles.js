import styled from "styled-components";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 75px auto;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
`;
export const FormRegister = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: white;
    font-weight: bold;
  }
  p {
    color: rgb(255, 255, 255);
  }
  input {
    padding: 5px;
    border: 0;
    margin-top: 10px;
    border-radius: 5px;
  }
  span {
    color: white;
    font-weight: bold;
    margin: 5px 0px 5px 0;
  }
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
`;

export const RegisterButton = styled.button`
  background-color: transparent;
  border: 0;
  button {
    border: 0;
    font-size: 16px;
    font-weight: bold;
    color: rgb(251, 209, 147);
    background-color: transparent;
    margin-top: 5px;
    margin-right: 5px;
  }
  button.Login {
    border: 0;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background-color: rgb(251, 209, 147);
    margin-top: 8px;
  }
  span {
    font-size: 18px;
    margin-right: 8px;
    color: rgb(255, 255, 255);
  }
`;
export const Icon = styled(MdAddAPhoto)`
  display: flex;
  align-items: left;
  font-size: 30px;
  border: 0;
  color: rgb(251, 209, 147);
`;
export const VideoIcon = styled(MdVideocam)`
  display: flex;
  align-items: left;
  font-size: 30px;
  border: 0;
  color: rgb(251, 209, 147);
`;
