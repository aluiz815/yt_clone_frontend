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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  padding: 10px;
  li {
    display: flex;
    flex-direction: column;
    h1 {
      color: rgb(191, 191, 191);
    }
    img {
      max-width: 80%;
      border: 1px solid rgb(251, 209, 147);
      align-self: center;
    }
    span {
      flex: 1;
      color: rgb(251, 209, 147);
    }
    strong {
      color: rgb(191, 191, 191);
    }
  }
`;
