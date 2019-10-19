import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 270px auto;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
`;
export const FormLogin = styled.form`
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
`;

export const LoginButton = styled.button`
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
