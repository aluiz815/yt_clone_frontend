import React from "react";
import { Link } from "react-router-dom";
import { Container, Videos } from "./styles";
import Teste from "../../assets/avatar.jpeg";
import Header from "../../components/Header";
export default function Dashboard() {
  return (
    <>
      <Header avatar={Teste} />
      <Container>
        <Videos>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img1</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img2</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img3</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img4</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img1</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img2</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img3</span>
            <strong>Autor</strong>
          </li>
          <li>
            <Link to="#">
              <img src={Teste} alt="" />
            </Link>
            <span>Img4</span>
            <strong>Autor</strong>
          </li>
        </Videos>
      </Container>
    </>
  );
}
