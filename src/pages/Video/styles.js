import styled from "styled-components";
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 50px;
  width: 50%;
`;
export const Videos = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
  li {
    display: flex;
    width: 70%;
    flex-direction: column;
    video {
      width: 100%;
      border: 1px solid rgb(251, 209, 147);
      align-self: center;
      margin-bottom: 15px;
    }
    span {
      flex: 1;
      color: rgb(251, 209, 147);
    }
    strong {
      color: rgb(191, 191, 191);
    }
    button {
      border: 0;
      font-weight: bold;
      border-radius: 5px;
      padding: 5px;
      margin-top: 5px;
      color: rgb(251, 209, 147);
      background: transparent;
    }
  }
`;
