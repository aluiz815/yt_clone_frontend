import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right top,
    #000000,
    #050203,
    #080408,
    #0a070e,
    #0a0a12
  );
  margin: 50px;
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
    img {
      max-width: 100%;
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
